import { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormReset } from "react-hook-form";
import {
    IQuery,
    IUseditemQuestion,
    IUseditemQuestionAnswer,
} from "../../../../../../commons/types/generated/types";

export interface ICommentAnswerListUIProps {
    data?: Pick<IQuery, "fetchUseditemQuestionAnswers">;
    commentId: string;
}

export interface ICommentAnswerListUIItemProps {
    el: IUseditemQuestionAnswer;
    modalContents?: string;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    commentId: string;
}

export interface ICommentAnswerListProps {
    el: IUseditemQuestion;
    commentId: string;
}
