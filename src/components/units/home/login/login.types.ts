import {
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormStateReturn,
} from "react-hook-form";
import { MutationLoginUserArgs } from "../../../../commons/types/generated/types";

export interface FormValues {
    email?: string;
    password?: string;
}

export interface ILoginUIProps {
    formState: UseFormStateReturn<FieldValues>;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickLogin: (data: MutationLoginUserArgs) => Promise<void>;
    onClickExitAlertModal: () => void;
    alertModal: boolean;
    modalContents?: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
    go: boolean;
    onClickconfirmModal: () => void;
    onClickRoutingModal: () => void;
}
