import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import BrandCommentAnswerWriteUI from "./BrandCommentAnswerWrite.presenter";
import {
    BRAND_COMMENTS_ANSWERS_CREATE,
    BRAND_COMMENTS_ANSWERS_UPDATE,
} from "./BrandCommentAnswerWrite.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { FETCH_BRAND_COMMENTS_ANSWERS } from "../listAnswer/BrandCommentAnswer.queries";

const schema = yup.object({
    contents: yup.string().max(100, "최대 100글자까지 가능합니다.").required("내용을 입력해주세요"),
});

export default function BrandCommentAnswerWrite(props: any) {
    const { register, handleSubmit, setValue, formState, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    const router = useRouter();
    const [createUseditemQuestionAnswer] = useMutation(BRAND_COMMENTS_ANSWERS_CREATE);
    const [updateUseditemQuestionAnswer] = useMutation(BRAND_COMMENTS_ANSWERS_UPDATE);

    const [contents, setContents] = useState(props.el?.contents || "");
    const [isValid, setIsValid] = useState(false);

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

    const onClickCommentAnswerSubmit = async (data: { contents?: string }) => {
        if (!data.contents) return alert("답글을 입력해주세요");
        try {
            await createUseditemQuestionAnswer({
                variables: {
                    useditemQuestionId: String(props.elAnswer?._id),
                    createUseditemQuestionAnswerInput: {
                        contents: data.contents,
                    },
                },
                refetchQueries: [
                    {
                        query: FETCH_BRAND_COMMENTS_ANSWERS,
                        variables: {
                            useditemQuestionId: String(props.elAnswer?._id),
                        },
                    },
                ],
            });
            setValue("contents", "");
            setModalContents("문의 답글을 성공적으로 등록이 되었습니다.");
            setAlertModal(true);
            props.setIsNewComment(false);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
            props.setIsNewComment(false);
        }
    };

    const onChangeContents = (event: any) => {
        if (event.target.value === "") {
            setIsValid(false);
        } else {
            setContents(event.target.value);
            setIsValid(true);
        }
    };

    const onClickCommentAnswerUpdate = async (data: { contents?: string }) => {
        if (!data.contents) return alert("답글을 수정 해주세요");
        try {
            await updateUseditemQuestionAnswer({
                variables: {
                    useditemQuestionAnswerId: String(props.el?._id),
                    updateUseditemQuestionAnswerInput: {
                        contents: data.contents,
                    },
                },
                refetchQueries: [
                    {
                        query: FETCH_BRAND_COMMENTS_ANSWERS,
                        variables: {
                            useditemQuestionId: String(props?.commentId),
                        },
                    },
                ],
            });
            setValue("contents", "");
            setModalContents("문의 수정이  등록이 되었습니다.");
            setAlertModal(true);
            props.setIsEdit(false);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
            props.setIsEdit(false);
        }
    };
    useEffect(() => {
        reset({
            contents: props.el?.contents,
        });
    }, []);

    return (
        <BrandCommentAnswerWriteUI
            onClickExitAlertModal={onClickExitAlertModal}
            alertModal={alertModal}
            modalContents={modalContents}
            onClickExitErrorModal={onClickExitErrorModal}
            errorAlertModal={errorAlertModal}
            onClickCommentAnswerSubmit={onClickCommentAnswerSubmit}
            onClickCommentAnswerUpdate={onClickCommentAnswerUpdate}
            onChangeContents={onChangeContents}
            contents={contents}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            isEdit={props.isEdit}
        />
    );
}
