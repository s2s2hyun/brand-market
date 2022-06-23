import { Query, UseditemQuestionAnswer } from "../../../../../../commons/types/generated/types";

export interface ICommentAnswerListUIProps {
    data?: Pick<Query, "fetchUseditemQuestionAnswers">;
}

export interface ICommentAnswerListUIItemProps {
    el: UseditemQuestionAnswer;
}
