import { useQuery } from "@apollo/client";
import {
    Query,
    QueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../../commons/types/generated/types";
import CommentAnswerListUI from "./BrandCommentAnswer.presenter";
import { FETCH_BRAND_COMMENTS_ANSWERS } from "./BrandCommentAnswer.queries";

export default function CommentAnswerList(props: any) {
    const { data } = useQuery<
        Pick<Query, "fetchUseditemQuestionAnswers">,
        QueryFetchUseditemQuestionAnswersArgs
    >(FETCH_BRAND_COMMENTS_ANSWERS, {
        variables: { useditemQuestionId: String(props?.id) },
    });
    return <CommentAnswerListUI data={data} />;
}
