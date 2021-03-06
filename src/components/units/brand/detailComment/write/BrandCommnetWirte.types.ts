import { Dispatch, SetStateAction } from "react";
import {
    FieldValues,
    FormState,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormStateReturn,
} from "react-hook-form";
import {
    ICreateUseditemQuestionInput,
    IUpdateUseditemQuestionInput,
    IUseditemQuestion,
} from "../../../../../commons/types/generated/types";

export interface IBrandCommentWriteProps {
    isEdit?: boolean;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    el?: IUseditemQuestion;
}

export interface IBrandCommentWriteUIProps {
    onClickCommentUpdate: (data: { contents?: string }) => Promise<void>;
    onClickCommentSubmit: (data: { contents?: string }) => Promise<void>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    isEdit?: boolean;
    register: UseFormRegister<FieldValues>;
    onClickExitAlertModal: () => void;
    formState: FormState<FieldValues>;
    alertModal: boolean;
    modalContents?: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
}
