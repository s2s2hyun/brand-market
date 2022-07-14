import { IBoard } from "../../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardListBestUIProps {
    data: {
        fetchBoardsOfTheBest: Array<IBoard>;
    };
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
