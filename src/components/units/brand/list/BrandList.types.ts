import { ChangeEvent, MouseEventHandler } from "react";
import { Useditem } from "../../../../commons/types/generated/types";

export interface IBrandListUIProps {
    // data: {
    //     fetchUseditems: Array<Useditem>;
    // };
    data: any;

    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    onLoadMore: (page: number) => void;
    onClickMoveToNew: () => void;
    keyword: string;
    setKeyword: Function;
    isMatched: boolean;
    onClickMoveToBrandDetail: MouseEventHandler<HTMLDivElement>;
}

export interface IProps {
    isMatched: boolean;
}
