import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    ICreateUseditemQuestionInput,
    IUpdateUseditemQuestionInput,
} from "../../../../../commons/types/generated/types";
import BrandCommentWriteUI from "./BrandCommnetWirte.presenter";
import {
    CREATE_BRAND_COMMENT,
    FETCH_BRAND_COMMENTS,
    UPDATE_BRAND_COMMENT,
} from "./BrandCommnetWirte.queries";
import { IBrandCommentWriteProps } from "./BrandCommnetWirte.types";
import { useEffect, useState } from "react";

const schema = yup.object({
    contents: yup.string().max(100, "최대 100글자까지 가능합니다.").required("내용을 입력해주세요"),
});

export default function BrandCommentWrite(props: IBrandCommentWriteProps) {
    const { register, handleSubmit, setValue, formState, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const router = useRouter();
    const [createUseditemQuestion] = useMutation(CREATE_BRAND_COMMENT);
    const [updateUseditemQuestion] = useMutation(UPDATE_BRAND_COMMENT);

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

    // 문의하기
    const onClickCommentSubmit = async (data: { contents?: string }) => {
        if (!data.contents) return alert("댓글을 입력해주세요.");
        try {
            await createUseditemQuestion({
                variables: {
                    useditemId: String(router.query.brandId),

                    createUseditemQuestionInput: {
                        contents: data.contents,
                    },
                },
                refetchQueries: [
                    {
                        query: FETCH_BRAND_COMMENTS,
                        variables: {
                            useditemId: String(router.query.brandId),
                        },
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
    };

    const onClickCommentUpdate = async (data: { contents?: string }) => {
        try {
            if (!props.el?._id) return;
            await updateUseditemQuestion({
                variables: {
                    useditemQuestionId: props.el._id,
                    updateUseditemQuestionInput: {
                        contents: data.contents,
                    },
                },
                refetchQueries: [
                    {
                        query: FETCH_BRAND_COMMENTS,
                        variables: {
                            useditemId: String(router.query.brandId),
                        },
                    },
                ],
            });
            setModalContents("문의가 성공적으로 수정 되었습니다.");
            setAlertModal(true);
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
        <BrandCommentWriteUI
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            onClickCommentSubmit={onClickCommentSubmit}
            onClickCommentUpdate={onClickCommentUpdate}
            isEdit={props.isEdit}
            onClickExitAlertModal={onClickExitAlertModal}
            alertModal={alertModal}
            modalContents={modalContents}
            onClickExitErrorModal={onClickExitErrorModal}
            errorAlertModal={errorAlertModal}
        />
    );
}
