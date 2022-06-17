import { ChangeEvent } from "react";
import {
    FieldValues,
    UseFormGetValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormReturn,
    UseFormSetValue,
    UseFormStateReturn,
} from "react-hook-form";
import {
    CreateUseditemInput,
    Query,
    UpdateUseditemInput,
} from "../../../../commons/types/generated/types";

export interface FormValues {
    name: string;
    remarks: string;
    contents: string;
    price: string;
    detailAddress: string;
}

export interface IBrandWriteUIProps {
    data: any;
    setValue: UseFormSetValue<FormValues>;
    getValues: UseFormGetValues<FormValues>;
    isActive: boolean;
    fileUrls: any;
    onKeyUpHash: (event: any) => void;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: UseFormStateReturn<FieldValues>;
    register: UseFormRegister<FormValues>;
    onChangeContents: (value: string) => void;
    onChangeTags: any;
    onClickUpload: () => void;
    modalContents: string | undefined;
    alertModal: boolean;
    go: boolean;
    onChangeFileUrls: (fileUrl: string, index: number) => void;
    onClickExitSubmitModal: () => void;
    onClickExitUpdateModal: () => void;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
    isOpen: boolean;
    showModal: () => void;
    handleOk: () => void;
    handleCancel: () => void;
    handleComplete: (data: any) => void;
    onClickSubmit: (data: CreateUseditemInput) => Promise<void>;
    onClickUpdate: (data: UpdateUseditemInput) => Promise<void>;
    isEdit: boolean;
    address: string;
    zipcode: string;
    hashArr: string[];
    onClickImageDelete: (index: any) => () => void;
}

export interface IBrandProps {
    fetchUseditem: any;
}
