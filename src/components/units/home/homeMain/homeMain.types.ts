import { MouseEventHandler } from "react";
import { Useditem } from "../../../../commons/types/generated/types";

export interface IHomeMainUIProps {
    data: {
        fetchUseditems: Array<Useditem>;
    };
    onLoadMore: (page: number) => void;
    onClickMoveToBrandDetail: MouseEventHandler<HTMLDivElement>;
}
