import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
    Query,
    QueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import BrandCommentListUI from "./BrandCommnetList.presenter";
import { FETCH_BRAND_COMMENTS } from "./BrandCommnetList.queries";

export default function BrandCommentList() {
    const router = useRouter();
    const { data, fetchMore } = useQuery<
        Pick<Query, "fetchUseditemQuestions">,
        QueryFetchUseditemQuestionsArgs
    >(FETCH_BRAND_COMMENTS, {
        variables: {
            useditemId: String(router.query.brandId),
        },
    });

    const onLoadMore = () => {
        if (!data) return;

        fetchMore({
            variables: {
                page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult?.fetchUseditemQuestions)
                    return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
                return {
                    fetchUseditemQuestions: [
                        ...prev.fetchUseditemQuestions,
                        ...fetchMoreResult.fetchUseditemQuestions,
                    ],
                };
            },
        });
    };
    return <BrandCommentListUI data={data} onLoadMore={onLoadMore} />;
}
