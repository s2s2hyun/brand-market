import { MouseEventHandler } from "react";
import { IUseditem } from "../../../../../commons/types/generated/types";

export interface IBrandListBestUIProps {
    data: {
        fetchUseditemsOfTheBest: Array<IUseditem>;
    };
    onClickMoveToBrandDetail: MouseEventHandler<HTMLDivElement>;
}
