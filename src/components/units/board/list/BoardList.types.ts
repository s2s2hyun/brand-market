import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import { Board, Query, QueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    data: {
        fetchBoards: Array<Board>;
    };
    onClickMoveToBoardNew: () => void;
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
    refetch: (
        variables: Partial<QueryFetchBoardsArgs>
    ) => Promise<ApolloQueryResult<Pick<Query, "fetchBoards">>>;
    count?: number;
    keyword: string;
    setKeyword: Function;
    isMatched: boolean;
}
export interface ITextTokenprops {
    isMatched: boolean;
}
