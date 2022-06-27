import * as S from "./BrandCommentAnswer.styles";
import { ICommentAnswerListUIItemProps } from "./BrandCommentAnswer.types";
import { getDate } from "../../../../../../commons/utils";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, LOGIN_USER_FOR_DELETE } from "../../../detail/BrandDetail.queries";
import {
    BRAND_COMMENTS_ANSWERS_DELETE,
    BRAND_COMMENTS_ANSWERS_UPDATE,
} from "../listAnswerWrite/BrandCommentAnswerWrite.queries";
import { FETCH_BRAND_COMMENTS } from "../BrandCommnetList.queries";
import Alert from "../../../../../commons/modal/alert/alert";
import ErrorAlert from "../../../../../commons/modal/errorModal/errorAlert";
import { Modal } from "antd";
import BrandCommentAnswerWrite from "../listAnswerWrite/BrandCommentAnswerWrite.container";

export default function CommentAnswerListUIItem(props: ICommentAnswerListUIItemProps) {
    const router = useRouter();
    const [isEdit, setIsEdit] = useState(false);
    const [deleteUseditemQuestionAnswer] = useMutation(BRAND_COMMENTS_ANSWERS_DELETE);
    const [updateUseditemQuestionAnswer] = useMutation(BRAND_COMMENTS_ANSWERS_UPDATE);
    const [modalPassword, setModalPassword] = useState("");
    const [loginUserForDelete] = useMutation(LOGIN_USER_FOR_DELETE);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const onClickAnswerUpdate = () => {
        setIsEdit((prev) => !prev);
    };

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

    const onClickAnswerDelete = async () => {
        try {
            await deleteUseditemQuestionAnswer({
                variables: {
                    useditemQuestionAnswerId: props.el?._id,
                },
                refetchQueries: [
                    {
                        query: FETCH_BRAND_COMMENTS,
                        variables: { useditemId: String(router.query.brandId) },
                    },
                ],
            });
            alert("댓글이 정상적으로 삭제되었습니다");
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    const onClickAnswerCommentDelete = async () => {
        try {
            await loginUserForDelete({
                variables: {
                    email: String(userData.fetchUserLoggedIn.email),
                    password: modalPassword,
                },
                refetchQueries: [
                    {
                        query: FETCH_BRAND_COMMENTS,
                        variables: { useditemId: String(router.query.brandId) },
                    },
                ],
            });
            onClickAnswerDelete();
            setIsOpen(false);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
    const onChangePassword = (event: any) => {
        setModalPassword(event?.target.value);
    };

    return (
        <>
            {alertModal && (
                <Alert onClickExit={onClickconfirmModal} contents={props.modalContents} />
            )}
            {errorAlertModal && (
                <ErrorAlert onClickExit={onClickExitErrorModal} contents={modalContents} />
            )}
            {isOpen && (
                <Modal visible={true} onOk={onClickAnswerCommentDelete} onCancel={onToggleModal}>
                    비밀번호 입력:{" "}
                    <input type="password" maxLength={20} onChange={onChangePassword} />
                </Modal>
            )}
            <S.Wrapper>
                <S.DividerWrapper>
                    <S.AnswerCommentDivider />
                </S.DividerWrapper>
                <S.AnswerCommentWrapper>
                    <S.AnswerInfo>
                        <S.AnswerComment>답변</S.AnswerComment>
                        <S.AnswerCommentName>{props.el?.user?.name}</S.AnswerCommentName>
                        <>
                            {props.el.user._id === userData?.fetchUserLoggedIn?._id ? (
                                <>
                                    <S.AnswerCommentOption>
                                        <S.AnswerCommentDelete
                                            src="/images/comment_delete.png"
                                            onClick={onToggleModal}
                                        />
                                        <S.AnswerCommentUpdate
                                            src="/images/comment_update.png"
                                            onClick={onClickAnswerUpdate}
                                        />
                                    </S.AnswerCommentOption>
                                </>
                            ) : (
                                <div></div>
                            )}
                        </>
                    </S.AnswerInfo>
                    <S.AnswerCreateAt>{getDate(props.el?.createdAt)}</S.AnswerCreateAt>
                    <S.AnswerContents>{props.el?.contents}</S.AnswerContents>
                </S.AnswerCommentWrapper>
                {isEdit && (
                    <BrandCommentAnswerWrite
                        el={props.el}
                        setIsEdit={setIsEdit}
                        isEdit={isEdit}
                        commentId={props.commentId}
                    />
                )}
            </S.Wrapper>
        </>
    );
}
