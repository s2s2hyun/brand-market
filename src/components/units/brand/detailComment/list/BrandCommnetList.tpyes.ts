import { Dispatch, SetStateAction } from "react";
import { IQuery, IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IBrandCommentListUIProps {
    data?: Pick<IQuery, "fetchUseditemQuestions">;
    onLoadMore: () => void;
}

export interface IBrandCommentListUIItemProps {
    el: IUseditemQuestion;
    modalContents?: string;
    isOpenDeleteModal: any;
    // isOpenDeleteModal: boolean;
    // isMy: boolean | undefined;
}
