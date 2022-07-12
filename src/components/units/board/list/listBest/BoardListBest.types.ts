import { Board } from "../../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardListBestUIProps {
    data: {
        fetchBoardsOfTheBest: Array<Board>;
    };
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
