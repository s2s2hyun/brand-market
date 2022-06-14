import {
    FieldValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormStateReturn,
} from "react-hook-form";

export interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
}

export interface ISignupUIProps {
    formState: UseFormStateReturn<FieldValues>;
    register: UseFormRegister<FormValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickcreateUser: (data: FormValues) => Promise<void>;
    // 모달
    alertModal: boolean;
    errorAlertModal: boolean;
    modalContents: string | undefined;
    onClickRoutingModal: () => void;
    onClickconfirmModal: () => void;
    onClickErrorModal: () => void;
    onClickCancle: () => void;
    // useMoveToPage: (path: string) => () => void;
    MoveToPage: (path: string) => () => void;
    // router: (path: string) => () => void;
    go: boolean;
}
