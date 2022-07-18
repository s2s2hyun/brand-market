import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, MouseEvent } from "react";
import BrandListUI from "./BrandList.presenter";
import { FETCH_USEDITEMS } from "./BrandList.queries";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
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
    const [, setTodayProductItem] = useRecoilState(todayProductState);

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
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult?.fetchUseditems)
                    return { fetchUseditems: [...prev.fetchUseditems] };
                return {
                    fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems],
                };
            },
        });
    };

    const onClickMoveToBrandDetail = (el: any) => (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/brands/${event.currentTarget.id}`);

        const todayProduct = JSON.parse(localStorage.getItem("todayProduct") || "[]");

        const { __typename, ...newEl } = el;
        todayProduct.push(newEl);

        localStorage.setItem("todayProduct", JSON.stringify(todayProduct));

        const seeLocal = _.uniqBy(todayProduct, "_id");
        const todaylocal = seeLocal.slice(0, 3);

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
