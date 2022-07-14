import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
    IQuery,
    IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../detail/BrandDetail.queries";
import BrandCommentListUI from "./BrandCommnetList.presenter";
import { FETCH_BRAND_COMMENTS } from "./BrandCommnetList.queries";

export default function BrandCommentList() {
    const router = useRouter();
    const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
    const { data, fetchMore } = useQuery<
        Pick<IQuery, "fetchUseditemQuestions">,
        IQueryFetchUseditemQuestionsArgs
    >(FETCH_BRAND_COMMENTS, {
        variables: {
            useditemId: String(router.query.brandId),
        },
    });

    const onLoadMore = () => {
        if (!data) return;
        console.log(data, "데이터");
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
    return (
        <BrandCommentListUI
            data={data}
            onLoadMore={onLoadMore}
            // myComment={data?.fetchUseditemQuestions?.user?._id === userData?.fetchUserLoggedIn?._id}
        />
    );
}
