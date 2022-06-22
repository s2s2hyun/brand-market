import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BrandListBestUI from "./BrandListBest.presenter";
import { FETCH_USEDITEM_OFTHEBEST } from "./BrandListBest.queries";
import { MouseEvent } from "react";

export default function BrandListBest() {
    const router = useRouter();
    const { data } = useQuery(FETCH_USEDITEM_OFTHEBEST);
    const onClickMoveToBrandDetail = (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/brands/${event.currentTarget.id}`);
    };

    return <BrandListBestUI data={data} onClickMoveToBrandDetail={onClickMoveToBrandDetail} />;
}
