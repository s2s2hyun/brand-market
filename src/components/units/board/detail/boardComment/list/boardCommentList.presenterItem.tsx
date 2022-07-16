import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
} from "../../../../../../commons/types/generated/types";
import { getDate } from "../../../../../../commons/utils";
import Alert from "../../../../../commons/modal/alert/alert";
import ErrorAlert from "../../../../../commons/modal/errorModal/errorAlert";
import BoardCommentWrite from "../write/boardCommentWrite.container";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./boardCommentList.queries";
import * as S from "./boardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./boardCommentList.types";

export default function BoardCommentListUIItem(props: IBoardCommentListUIItemProps) {
    const router = useRouter();
    const [isEdit, setIsEdit] = useState(false);
    const [modalPassword, setModalPassword] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleCancel = () => {
        setIsOpen(false);
    };

    const onClickUpdate = () => {
        setIsEdit((prev) => !prev);
    };

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    // 얼럿모달

    const [, setModalContents] = useState("");
    const [, setErrorAlertModal] = useState(false);

    const onClickDelete = async () => {
        try {
            await deleteBoardComment({
                variables: {
                    password: modalPassword,
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

    const onClickOpenDeleteModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            {isOpen && (
                <Modal visible={true} onOk={onClickDelete} onCancel={handleCancel}>
                    <S.ModalContents>비밀번호 입력: </S.ModalContents>
                    <S.PasswordInput type="password" onChange={onChangePassword} />
                </Modal>
            )}
            {!isEdit && (
                <S.ItemWrapper>
                    <S.CommentWrapper>
                        <S.Photo src="/images/peoplephoto.svg" />
                        <S.CommentMain>
                            <S.UserRate>
                                <S.UserWriter>{props.el?.writer}</S.UserWriter>
                                <S.Star value={props.el?.rating} disabled />
                            </S.UserRate>
                            <S.Contents>{props.el?.contents}</S.Contents>
                        </S.CommentMain>
                        <S.OptionWrapper>
                            <S.Retouch src="/images/pencle.svg" onClick={onClickUpdate} />
                            <S.Delete src="/images/trash.svg" onClick={onClickOpenDeleteModal} />
                        </S.OptionWrapper>
                    </S.CommentWrapper>
                    <S.CreateAt>{getDate(props.el?.createdAt)}</S.CreateAt>
                </S.ItemWrapper>
            )}
            {isEdit && <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
        </>
    );
}
