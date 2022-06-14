import { useQuery } from "@apollo/client";
import BrandListUI from "./BrandList.presenter";
import { FETCH_USEDITEMS } from "./BrandList.queries";

export default function BrandList() {
    const { data, fetchMore } = useQuery(FETCH_USEDITEMS);

    const onLoadMore = () => {
        if (!data) return;

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

    return <BrandListUI data={data} onLoadMore={onLoadMore} />;
}
