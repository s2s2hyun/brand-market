import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import {
    CreateUseditemQuestionInput,
    MutationCreateUseditemQuestionArgs,
    MutationUpdateUseditemQuestionArgs,
    UpdateUseditemQuestionInput,
    UseditemQuestion,
} from "../../../../../commons/types/generated/types";

export interface IBrandCommentWriteProps {
    isEdit?: boolean;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    el?: UseditemQuestion;
}

export interface IBrandCommentWriteUIProps {
    onClickCommentSubmit: (data: MutationCreateUseditemQuestionArgs) => Promise<void>;
    onClickCommentUpdate: (data: MutationUpdateUseditemQuestionArgs) => Promise<void>;
    isEdit?: boolean;
    handleSubmit: UseFormHandleSubmit<FieldValues> | ((data: any) => Promise<void>);
    register: UseFormRegister<FieldValues>;
}
