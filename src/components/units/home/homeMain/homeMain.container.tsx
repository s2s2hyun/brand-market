import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import HomeMainUI from "./homeMain.presenter";
import { FETCH_USEDITEMS } from "./homeMain.queries";

export default function HomeMain() {
    const router = useRouter();
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

    return <HomeMainUI data={data} onLoadMore={onLoadMore} />;
}
