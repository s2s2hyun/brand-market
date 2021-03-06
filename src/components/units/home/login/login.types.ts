import {
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormStateReturn,
} from "react-hook-form";
import { IMutationLoginUserArgs } from "../../../../commons/types/generated/types";

export interface FormValues {
    email?: string;
    password?: string;
}

export interface ILoginUIProps {
    formState: UseFormStateReturn<FieldValues>;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickLogin: (data: IMutationLoginUserArgs) => Promise<void>;
    onClickExitAlertModal: () => void;
    alertModal: boolean;
    modalContents?: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
    go: boolean;
    onClickconfirmModal: () => void;
    onClickRoutingModal: () => void;
    onClickSignup: () => void;
}
