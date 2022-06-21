import { Query, UseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IBrandCommentListUIProps {
    data?: Pick<Query, "fetchUseditemQuestions">;
    onLoadMore: () => void;
}

export interface IBrandCommentListUIItemProps {
    el: UseditemQuestion;
}
