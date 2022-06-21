import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
    Mutation,
    MutationDeleteUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { LOGIN_USER_FOR_DELETE } from "../../detail/BrandDetail.queries";
import { DELETE_BRAND_COMMENT, FETCH_BRAND_COMMENTS } from "./BrandCommnetList.queries";
import { IBrandCommentListUIItemProps } from "./BrandCommnetList.tpyes";

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

    const onClickUpdate = () => {
        setIsEdit(true);
    };

    const onClickDelete = async () => {
        try {
            await loginUserForDelete({
                variables: {
                    useditemQuestionId: props.el?._id,
                    password: modalPassword,
                },
                refetchQueries: [
                    {
                        query: FETCH_BRAND_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
        } catch (error:any) {
            alert(error.message);
        }
    };

    const onClickOpenDeleteModal = () => {
        setIsOpenDeleteModal(true);
    };


    return(

    )
}
