import { Dispatch, SetStateAction } from "react";
import {
    FieldValues,
    SubmitHandler,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormStateReturn,
} from "react-hook-form";
import { UseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IBrandCommentWriteProps {
    isEdit?: boolean;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    el?: UseditemQuestion;
}

export interface IBrandCommentWriteUIProps {
    formState: UseFormStateReturn<FieldValues>;
    onClickCommentUpdate: (data: UseditemQuestion) => Promise<void>;
    onClickCommentSubmit: (data: UseditemQuestion) => Promise<void>;
    isEdit?: boolean;
    handleSubmit: UseFormHandleSubmit<FieldValues> | ((data: any) => Promise<void>);
    register: UseFormRegister<FieldValues>;
    onClickExitAlertModal: () => void;
    alertModal: boolean;
    modalContents?: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
}
