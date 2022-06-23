import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import {
    CreateUseditemQuestionAnswerInput,
    UpdateUseditemQuestionAnswerInput,
} from "../../../../../../commons/types/generated/types";

export interface IBrandCommentAnswerWriteUIProps {
    onClickExitAlertModal: () => void;
    alertModal: boolean;
    modalContents?: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
    onClickCommentAnswerSubmit: (data: CreateUseditemQuestionAnswerInput) => Promise<void>;
    onClickCommentAnswerUpdate: (data: UpdateUseditemQuestionAnswerInput) => Promise<void>;
    onChangeContents: (event: any) => void;
    contents: any;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues> | ((data: any) => Promise<void>);
    formState: FormState<FieldValues>;
    isEdit?: boolean;
}
