import { MouseEventHandler } from "react";
import { IUseditem } from "../../../../commons/types/generated/types";

export interface IHomeMainUIProps {
    data: {
        fetchUseditems: Array<IUseditem>;
    };
    onLoadMore: (page: number) => void;
    onClickMoveToBrandDetail: MouseEventHandler<HTMLDivElement>;
}
