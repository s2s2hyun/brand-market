import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import * as S from "./BrandCommnetList.styles";
import {
    Mutation,
    MutationDeleteUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN, LOGIN_USER_FOR_DELETE } from "../../detail/BrandDetail.queries";
import { DELETE_BRAND_COMMENT, FETCH_BRAND_COMMENTS } from "./BrandCommnetList.queries";
import { IBrandCommentListUIItemProps } from "./BrandCommnetList.tpyes";
import { Modal } from "antd";
import BrandCommentWrite from "../write/BrandCommnetWirte.container";
import { getDate } from "../../../../../commons/utils";
import Alert from "../../../../commons/modal/alert/alert";
import ErrorAlert from "../../../../commons/modal/errorModal/errorAlert";

export default function BrandCommentListUIItem(props: IBrandCommentListUIItemProps) {
    const router = useRouter();
    const [isEdit, setIsEdit] = useState("");
    const [modalPassword, setModalPassword] = useState("");
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [loginUserForDelete] = useMutation(LOGIN_USER_FOR_DELETE);

    const [deleteUseditemQuestion] = useMutation<
        Pick<Mutation, "deleteUseditemQuestion">,
        MutationDeleteUseditemQuestionArgs
    >(DELETE_BRAND_COMMENT);

    const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

    const onClickUpdate = () => {
        setIsEdit(true);
    };

    // 얼럿모달
    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [errorAlertModal, setErrorAlertModal] = useState(false);
    // const [go, setGo] = useState(false);
    const onClickExitAlertModal = () => {
        setAlertModal(false);
    };

    // 에러 모달
    const onClickExitErrorModal = () => {
        setErrorAlertModal(false);
    };

    const onClickDelete = async () => {
        try {
            await deleteUseditemQuestion({
                variables: {
                    useditemQuestionId: props.el?._id,
                },
                refetchQueries: [
                    {
                        query: FETCH_BRAND_COMMENTS,
                        variables: { useditemId: String(router.query.productId) },
                    },
                ],
            });
        } catch (error: any) {
            alert(error.message);
        }
    };

    const onClickOpenDeleteModal = () => {
        setIsOpenDeleteModal(true);
    };

    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };
    const onClickUsedItemDelete = async () => {
        try {
            await loginUserForDelete({
                variables: {
                    email: String(userData.fetchUserLoggedIn.email),
                    password: modalPassword,
                },
            });
            onClickDelete();
            setModalContents("삭제 완료");
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    const onChangePassword = (event: any) => {
        setModalPassword(event?.target.value);
    };
    return (
        <>
            {alertModal && (
                <Alert onClickExit={onClickExitAlertModal} contents={props.modalContents} />
            )}

            {errorAlertModal && (
                <ErrorAlert onClickExit={onClickExitErrorModal} contents={modalContents} />
            )}
            {isOpen && (
                <Modal visible={true} onOk={onClickUsedItemDelete} onCancel={onToggleModal}>
                    비밀번호 입력:{" "}
                    <input type="password" maxLength={20} onChange={onChangePassword} />
                </Modal>
            )}

            {!isEdit && (
                <S.ItemWrapper>
                    <S.CommentWrapper>
                        <S.CommentDivider />
                        <S.CommentLineWrapper>
                            <S.NameContents>
                                <S.CommentUserName>{props.el?.user.name}</S.CommentUserName>
                                <S.CommentContents>{props.el?.contents}</S.CommentContents>
                            </S.NameContents>
                            <S.OptionWrapper>
                                <S.CommentCreateAt>
                                    {getDate(props.el?.createdAt)}
                                </S.CommentCreateAt>
                                <S.CommentUpdate
                                    src="/images/comment_update.png"
                                    onClick={onClickUpdate}
                                />
                                <S.CommentDelete
                                    src="/images/comment_delete.png"
                                    onClick={onClickOpenDeleteModal}
                                />
                            </S.OptionWrapper>
                        </S.CommentLineWrapper>
                        {/* <S.CommentBottomDivider /> */}
                    </S.CommentWrapper>
                </S.ItemWrapper>
            )}
            {isEdit && (
                <BrandCommentWrite
                    isEdit={true}
                    setIsEdit={setIsEdit}
                    el={props.el}
                    isOpenDeleteModal={isOpenDeleteModal}
                />
            )}
        </>
    );
}
