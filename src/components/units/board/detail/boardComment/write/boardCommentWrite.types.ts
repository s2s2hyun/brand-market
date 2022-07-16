import { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";
import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import {
    IBoardComment,
    ICreateBoardCommentInput,
} from "../../../../../../commons/types/generated/types";

export type IonClickUpdateData = {
    contents?: string;
    rating?: number;
    password?: string;
};

export type IonClickWriteData = {
    contents?: string;
    password?: string;
    rating?: number;
    writer?: string;
};

export interface IBoardCommentWriteProps {
    isEdit?: boolean;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    el?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
    onChangeStar?: (value: number) => void;
    onClickWrite: (data: IonClickWriteData) => Promise<void>;
    onClickUpdate: (data: IonClickUpdateData) => Promise<void>;
    isEdit?: boolean;
    el?: IBoardComment;
    contents: string;
    alertModal: boolean;
    modalContents?: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
    onClickExitAlertModal: () => void;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: FormState<FieldValues>;
    ratingRef: RefObject<HTMLUListElement>;
    onChangeContents: (event: {
        target: {
            value: string | any[];
        };
    }) => void;
    count: number;
}
