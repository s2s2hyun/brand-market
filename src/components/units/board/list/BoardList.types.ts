import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import { Board, Query, QueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
    dataBoardsCount: any;
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    data: any;
    onClickMoveToBoardNew: () => void;
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
    refetch: (
        variables: Partial<QueryFetchBoardsArgs>
    ) => Promise<ApolloQueryResult<Pick<Query, "fetchBoards">>>;
    count: any;
    keyword: string;
    setKeyword: Function;
    isMatched: any;
    // lastPage: number;
}
export interface IBoardListStyleProps {
    isMatched: boolean;
}
