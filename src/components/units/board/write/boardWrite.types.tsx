import { ChangeEvent } from "react";
import { FormState, UseFormGetValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
// import { ICreateBoardInput } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
    isEdit: boolean;
    data?: any;
}

export interface IUpdateBoardInput {
    password: string;
    fetchBoard: any;
    addressDetail: any;
    youtubeUrl?: string;
    title?: string;
    contents?: string;
}

export interface ICreateBoardInput {
    writer: string;
    password: string;
    title: string;
    contents: string;
    youtubeUrl: string;
    addressDetail: any;
}

export interface FormValues {
    writer: string;
    password: string;
    title: string;
    contents: string;
    youtubeUrl: string;
    addressDetail: any;
}

export interface ISubmitButtonProps {
    isActive: boolean;
}

export interface IBoardWriteUIProps {
    fileUrls: any;
    isActive: boolean;
    isOpen: boolean;
    isEdit: boolean;
    data?: any;
    onClickImageDelete: (index: number) => () => void;
    onClickExitSubmitModal: () => void;
    onClickExitUpdateModal: () => void;
    alertModal: boolean;
    modalContents: string | undefined;
    go: boolean;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
    showModal: () => void;
    handleOk: () => void;
    handleCancel: () => void;
    handleComplete: (data: any) => void;
    onClickSubmit: (data: ICreateBoardInput) => Promise<void>;
    onClickUpdate: (data: IUpdateBoardInput) => Promise<void>;
    onChangeFileUrls: (fileUrl: string, index: number) => void;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    formState: FormState<FormValues>;
    getValues: UseFormGetValues<FormValues>;
    register: UseFormRegister<FormValues>;
    onChangeContents: (value: string) => void;
    address: string;
    zipcode: string;
}
