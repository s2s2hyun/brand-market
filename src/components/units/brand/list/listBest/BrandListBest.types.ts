import { MouseEventHandler } from "react";
import { Useditem } from "../../../../../commons/types/generated/types";

export interface IBrandListBestUIProps {
    data: {
        fetchUseditemsOfTheBest: Array<Useditem>;
    };
    onClickMoveToBrandDetail: MouseEventHandler<HTMLDivElement>;
}
