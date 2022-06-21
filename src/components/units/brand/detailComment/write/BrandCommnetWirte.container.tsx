import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    CreateUseditemQuestionInput,
    Mutation,
    MutationCreateUseditemQuestionArgs,
    MutationUpdateUseditemQuestionArgs,
    UpdateUseditemQuestionInput,
    UseditemQuestion,
} from "../../../../../commons/types/generated/types";
import BrandCommentWriteUI from "./BrandCommnetWirte.presenter";
import {
    CREATE_BRAND_COMMENT,
    FETCH_BRAND_COMMENTS,
    UPDATE_BRAND_COMMENT,
} from "./BrandCommnetWirte.queries";
import { IBrandCommentWriteProps } from "./BrandCommnetWirte.types";

const schema = yup.object({
    contents: yup.string().max(100, "최대 100글자까지 가능합니다.").required("내용을 입력해주세요"),
});

export default function BrandCommentWrite(props: IBrandCommentWriteProps) {
    const { register, handleSubmit, setValue, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const router = useRouter();
    const [createUseditemQuestion] = useMutation(CREATE_BRAND_COMMENT);
    const [updateUseditemQuestion] = useMutation(UPDATE_BRAND_COMMENT);

    // 문의하기
    const onClickCommentSubmit = async (data: CreateUseditemQuestionInput) => {
        if (!data.contents) return alert("댓글을 입력해주세요.");
        try {
            await createUseditemQuestion({
                variables: {
                    useditemId: String(router.query.productId),

                    createUseditemQuestionInput: {
                        contents: data.contents,
                    },
                },
                refetchQueries: [
                    {
                        query: FETCH_BRAND_COMMENTS,
                        variables: {
                            useditemId: String(router.query.productId),
                        },
                    },
                ],
            });
            setValue("contents", "");
            alert("문의가 성공적으로 등록이 되었습니다.");
        } catch (error: any) {
            alert(error.message);
        }
    };

    const onClickCommentUpdate = async (data: UpdateUseditemQuestionInput) => {
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
                            useditemId: String(router.query.productId),
                        },
                    },
                ],
            });
            alert("문의가 성공적으로 수정 되었습니다.");
            props.setIsEdit?.(false);
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <BrandCommentWriteUI
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            onClickCommentUpdate={onClickCommentUpdate}
            onClickCommentSubmit={onClickCommentSubmit}
        />
    );
}
