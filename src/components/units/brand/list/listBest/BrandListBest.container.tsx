import { useQuery } from "@apollo/client";
import BrandListBestUI from "./BrandListBest.presenter";
import { FETCH_USEDITEM_OFTHEBEST } from "./BrandListBest.queries";

export default function BrandListBest() {
    const { data } = useQuery(FETCH_USEDITEM_OFTHEBEST);

    return <BrandListBestUI data={data} />;
}
