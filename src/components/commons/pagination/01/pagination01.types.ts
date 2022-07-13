import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import { Query, QueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
// import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export interface IPaginations01Props {
    count?: number;
    data?: any;
    refetch: (
        variables: Partial<QueryFetchBoardsArgs>
    ) => Promise<ApolloQueryResult<Pick<Query, "fetchBoards">>>;
    lastPage: number;
}

export interface IPaginations01UIProps {
    lastPage: number;
    data?: any;
    startPage: number;
    activedPage: number;
    onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
    onClickPrevPage: () => void;
    onClickNextPage: () => void;
}
