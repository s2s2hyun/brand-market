import { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormReset } from "react-hook-form";
import {
    Query,
    UseditemQuestion,
    UseditemQuestionAnswer,
} from "../../../../../../commons/types/generated/types";

export interface ICommentAnswerListUIProps {
    data?: Pick<Query, "fetchUseditemQuestionAnswers">;
    commentId: string;
}

export interface ICommentAnswerListUIItemProps {
    el: UseditemQuestionAnswer;
    modalContents?: string;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    commentId: string;
}

export interface ICommentAnswerListProps {
    el: UseditemQuestion;
    commentId: string;
}
