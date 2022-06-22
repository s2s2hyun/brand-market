import { Dispatch, SetStateAction } from "react";
import { Query, UseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IBrandCommentListUIProps {
    data?: Pick<Query, "fetchUseditemQuestions">;
    onLoadMore: () => void;
}

export interface IBrandCommentListUIItemProps {
    el: UseditemQuestion;
    modalContents?: string;
    isOpenDeleteModal?: boolean;
    // setIsEdit: Dispatch<SetStateAction<boolean>>;
}
