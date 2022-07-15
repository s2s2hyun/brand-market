import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
} from "../../../../../../commons/types/generated/types";
import Alert from "../../../../../commons/modal/alert/alert";
import ErrorAlert from "../../../../../commons/modal/errorModal/errorAlert";
import BoardCommentWrite from "../write/boardCommentWrite.container";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./boardCommentList.queries";
import * as S from "./boardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./boardCommentList.types";

export default function BoardCommentListUIItem(props: IBoardCommentListUIItemProps) {
    const router = useRouter();
    const [isEdit, setIsEdit] = useState(false);
    const [myPassword, setMyPassword] = useState("");
    const [modalPassword, setModalPassword] = useState("");
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    const onClickUpdate = () => {
        setIsEdit((prev) => !prev);
    };

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    // 얼럿모달
    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [errorAlertModal, setErrorAlertModal] = useState(false);
    // const [go, setGo] = useState(false);
    const onClickExitAlertModal = () => {
        setAlertModal(false);
    };

    // 확인 모달
    const onClickconfirmModal = () => {
        setAlertModal(false);
    };

    // 에러 모달
    const onClickExitErrorModal = () => {
        setErrorAlertModal(false);
    };

    const onClickDelete = async () => {
        try {
            await deleteBoardComment({
                variables: {
                    password: myPassword,
                    boardCommentId: props.el?._id,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            alert("댓글이 정상적으로 삭제되었습니다");
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setModalPassword(event?.target.value);
    };

    return (
        <>
            {alertModal && <Alert onClickExit={onClickconfirmModal} contents={modalContents} />}
            {errorAlertModal && (
                <ErrorAlert onClickExit={onClickExitErrorModal} contents={modalContents} />
            )}
            {isOpen && (
                <Modal visible={true} onOk={onClickDelete} onCancel={onToggleModal}>
                    <div>비밀번호 입력: </div>
                    <input type="password" onChange={onChangePassword} />
                </Modal>
            )}
            {!isEdit && <S.ItemWrapper></S.ItemWrapper>}
            {isEdit && <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
        </>
    );
}
