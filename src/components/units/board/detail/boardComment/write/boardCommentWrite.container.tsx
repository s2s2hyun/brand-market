import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import BoardCommentWriteUI from "./boardCommentWrite.presenter";
import {
    CREATE_BOARD_COMMENT,
    UPDATE_BOARD_COMMENT,
    FETCH_BOARD_COMMENTS,
} from "./boardCommentWrite.queries";
import {
    IBoardCommentWriteProps,
    IonClickWriteData,
    IonClickUpdateData,
} from "./boardCommentWrite.types";
import {
    ICreateBoardCommentInput,
    IMutation,
    IMutationCreateBoardCommentArgs,
    IMutationUpdateBoardCommentArgs,
    IUpdateBoardCommentInput,
} from "../../../../../../commons/types/generated/types";
import { Modal } from "antd";

const schema = yup.object({
    contents: yup.string().max(100, "최대 100글자까지 가능합니다.").required("내용을 입력해주세요"),
});

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
    const { register, handleSubmit, setValue, formState, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const router = useRouter();
    const ratingRef = useRef<any>(null);

    const [star, setStar] = useState(0);
    const [contents] = useState("");

    const [createBoardComment] = useMutation<
        Pick<IMutation, "createBoardComment">,
        IMutationCreateBoardCommentArgs
    >(CREATE_BOARD_COMMENT);
    const [updateBoardComment] = useMutation<
        Pick<IMutation, "updateBoardComment">,
        IMutationUpdateBoardCommentArgs
    >(UPDATE_BOARD_COMMENT);

    const onChangeStar = (value: number) => {
        setStar(value);
    };

    // 얼럿모달
    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [errorAlertModal, setErrorAlertModal] = useState(false);
    const [count, setCount] = useState(0);
    // const [go, setGo] = useState(false);
    const onClickExitAlertModal = () => {
        setAlertModal(false);
    };

    // 에러 모달
    const onClickExitErrorModal = () => {
        setErrorAlertModal(false);
    };

    const onChangeContents = (event: { target: { value: string | any[] } }) => {
        setCount(event.target.value.length);
    };

    const onClickWrite = async (data: IonClickWriteData) => {
        if (!data.contents) return;
        try {
            await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer: data.writer,
                        password: data.password,
                        contents: data.contents,
                        rating: star,
                    },
                    boardId: String(router.query.boardId),
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            setValue("contents", "");
            setModalContents("문의가 성공적으로 등록이 되었습니다.");
            setAlertModal(true);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
        reset({
            writer: "",
            password: "",
        });
        if (!ratingRef.current) return;
        ratingRef.current.state.value = 0;
    };

    const onClickUpdate = async (data: IonClickUpdateData) => {
        if (!data.contents) {
            setModalContents("내용이 수정되지 않았습니다.");
            return;
        }
        try {
            if (!props.el?._id) return;

            await updateBoardComment({
                variables: {
                    updateBoardCommentInput: {
                        contents: data.contents,
                        rating: star,
                    },
                    boardCommentId: props.el?._id,
                    password: data.password,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            Modal.success({
                content: "댓글 수정이 완료되었습니다!",
            });
            props.setIsEdit?.(false);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    useEffect(() => {
        reset({
            contents: props.el?.contents,
        });
    }, []);

    return (
        <BoardCommentWriteUI
            onChangeStar={onChangeStar}
            onClickWrite={onClickWrite}
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
            el={props.el}
            onClickExitAlertModal={onClickExitAlertModal}
            alertModal={alertModal}
            modalContents={modalContents}
            onClickExitErrorModal={onClickExitErrorModal}
            errorAlertModal={errorAlertModal}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            contents={contents}
            ratingRef={ratingRef}
            onChangeContents={onChangeContents}
            count={count}
        />
    );
}
