import { ChangeEvent } from "react";
import {
    FieldValues,
    UseFormGetValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormReturn,
    UseFormStateReturn,
} from "react-hook-form";

export interface FormValues {
    name: string;
    remarks: string;
    contents: string;
    price: string;
    detailAddress: string;
}

export interface IBrandWriteUIProps {
    setValue: UseFormReturn["setValue"];
    getValues: UseFormGetValues<FieldValues>;
    hassArr: string[];
    isActive: boolean;
    fileUrls: any;
    onKeyUpHash: (event: any) => void;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: UseFormStateReturn<FieldValues>;
    register: UseFormRegister<FormValues>;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeTags: any;
    onChangeFileUrls: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickUpload: () => void;
}
