import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./boardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./boardDetail.queries";
import {
    IMutation,
    IMutationDislikeBoardArgs,
    IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardDetail() {
    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: String(router.query.boardId) },
    });

    const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(
        LIKE_BOARD
    );

    const [dislikeBoard] = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(
        DISLIKE_BOARD
    );

    const onClickMoveToBoardList = () => {
        router.push("/board");
    };

    // 얼럿모달
    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [errorAlertModal, setErrorAlertModal] = useState(false);
    const [go, setGo] = useState(false);
    const onClickExitAlertModal = () => {
        setAlertModal(false);
    };

    // 에러 모달
    const onClickExitErrorModal = () => {
        setErrorAlertModal(false);
    };

    // 확인 모달
    const onClickconfirmModal = () => {
        setAlertModal(false);
    };

    // 이동 모달
    const onClickRoutingModal = () => {
        setAlertModal(false);
        router.push("/");
    };

    const onClickMoveToBoardEdit = () => {
        router.push(`/board/${router.query.boardId}/edit`);
    };

    const onClickLike = () => {
        likeBoard({
            variables: { boardId: String(router.query.boardId) },
            // optimisticResponse: graphQL에서 mutation을 할 때 제공하는 옵션.
            optimisticResponse: {
                likeBoard: data?.fetchBoard.likeCount + 1,
            },
            update(cache, { data }) {
                cache.writeQuery({
                    query: FETCH_BOARD,
                    variables: { boardId: String(router.query.boardId) },
                    data: {
                        fetchBoard: {
                            // _id, __typename 반드시 적어야한다.
                            _id: String(router.query.boardId),
                            __typename: "Board",
                            likeCount: data?.likeBoard,
                        },
                    },
                });
            },
        });
    };

    const onClickDislike = () => {
        dislikeBoard({
            variables: { boardId: String(router.query.boardId) },
            // optimisticResponse: graphQL에서 mutation을 할 때 제공하는 옵션.
            optimisticResponse: {
                dislikeBoard: data?.fetchBoard.dislikeCount + 1,
            },
            update(cache, { data }) {
                cache.writeQuery({
                    query: FETCH_BOARD,
                    variables: { boardId: String(router.query.boardId) },
                    data: {
                        fetchBoard: {
                            // _id, __typename 반드시 적어야한다.
                            _id: String(router.query.boardId),
                            __typename: "Board",
                            dislikeCount: data?.dislikeBoard,
                        },
                    },
                });
            },
        });
    };

    const onClickDelete = async () => {
        try {
            await deleteBoard({
                variables: {
                    boardId: router.query.boardId,
                },
            });
            alert("게시물이 삭제되었습니다.");
            router.push("/board");
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <BoardDetailUI
            data={data}
            onClickMoveToBoardList={onClickMoveToBoardList}
            onClickMoveToBoardEdit={onClickMoveToBoardEdit}
            onClickDelete={onClickDelete}
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
            go={go}
            onClickExitAlertModal={onClickExitAlertModal}
            alertModal={alertModal}
            modalContents={modalContents}
            onClickExitErrorModal={onClickExitErrorModal}
            errorAlertModal={errorAlertModal}
            onClickconfirmModal={onClickconfirmModal}
            onClickRoutingModal={onClickRoutingModal}
        />
    );
}
