import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, MouseEvent } from "react";
import BrandListUI from "./BrandList.presenter";
import { FETCH_USEDITEMS } from "./BrandList.queries";
import {
    IQuery,
    IQueryFetchUseditemsArgs,
    IUseditem,
} from "../../../../commons/types/generated/types";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { todayProductState } from "../../../../commons/store";

export default function BrandList() {
    const router = useRouter();
    const { data, fetchMore, refetch } = useQuery<
        Pick<IQuery, "fetchUseditems">,
        IQueryFetchUseditemsArgs
    >(FETCH_USEDITEMS);

    const onClickMoveToNew = () => {
        router.push("/new");
    };

    const [keyword, setKeyword] = useState("");
    const [loadingMessage, setLoadingMessage] = useState("");
    const [todayProductItem, setTodayProductItem] = useRecoilState(todayProductState);

    const getDebounce = _.debounce((data) => {
        refetch({ search: data, page: 1 });
        setKeyword(data);
        setLoadingMessage("검색 결과가 없습니다 ...");
    }, 500);

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        getDebounce(event.target.value);
        setLoadingMessage;
    };

    const onLoadMore = () => {
        if (data === undefined) return;

        fetchMore({
            variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
            // 페이지는 전체댓글 갯수에 1페이지 10개니까 10으로 나눈 뒤 올림을 해줘야 전체 페이지 개수를 알 수 있음
            updateQuery: (prev, { fetchMoreResult }) => {
                // 이전 (현재 표출 중인) 데이터 + 다음 표출 데이터
                if (!fetchMoreResult?.fetchUseditems)
                    return { fetchUseditems: [...prev.fetchUseditems] };
                // 다음 표출될 데이터 없을 경우 표출될 상황 만약 개수가 없다면 기존 페치보드만 넣어줘
                return {
                    fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems],
                }; // 이전의 10개를 뿌리고, 추가로 받은 10개를 붙여서 fetchBoard를 업데이트
            }, // 이전 데이터와 다음 데이터 함께 표출(스프레드 연산자)
        });
    };

    const onClickMoveToBrandDetail = (el: IUseditem) => (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/brands/${event.currentTarget.id}`);

        const todayProductItem = JSON.parse(localStorage.getItem("todayProduct") || "[]");

        const { __typename, ...newEl } = el;
        todayProductItem.push(newEl);

        localStorage.setItem("todayProduct", JSON.stringify(todayProductItem));

        const seeLocal = _.uniqBy(todayProductItem, "_id");
        const todaylocal = seeLocal.slice(0, 10);

        setTodayProductItem(todaylocal);
    };

    return (
        <BrandListUI
            data={data}
            onLoadMore={onLoadMore}
            keyword={keyword}
            setKeyword={setKeyword}
            onClickMoveToNew={onClickMoveToNew}
            onChangeSearch={onChangeSearch}
            isMatched={false}
            onClickMoveToBrandDetail={onClickMoveToBrandDetail}
            loadingMessage={loadingMessage}
        />
    );
}
