import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IBrandCommentAnswerWriteUIProps {
    onClickExitAlertModal: () => void;
    alertModal: boolean;
    modalContents?: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
    onClickCommentAnswerSubmit: (data: { contents?: string }) => Promise<void>;
    onClickCommentAnswerUpdate: (data: { contents?: string }) => Promise<void>;
    onChangeContents: (event: any) => void;
    contents: any;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: FormState<FieldValues>;
    isEdit?: boolean;
}
