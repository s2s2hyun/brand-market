import { useQuery } from "@apollo/client";
import router from "next/router";
import {
    IQuery,
    IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../../detail/BrandDetail.queries";
import CommentAnswerListUI from "./BrandCommentAnswer.presenter";
import { FETCH_BRAND_COMMENTS_ANSWERS } from "./BrandCommentAnswer.queries";
import { ICommentAnswerListProps } from "./BrandCommentAnswer.types";

export default function CommentAnswerList(props: ICommentAnswerListProps) {
    const { data } = useQuery<
        Pick<IQuery, "fetchUseditemQuestionAnswers">,
        IQueryFetchUseditemQuestionAnswersArgs
    >(FETCH_BRAND_COMMENTS_ANSWERS, {
        variables: { useditemQuestionId: String(props.el?._id) },
    });

    return <CommentAnswerListUI data={data} commentId={props.el?._id} />;
}
