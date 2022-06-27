import { ChangeEvent, MouseEventHandler } from "react";
import { Useditem } from "../../../../commons/types/generated/types";

export interface IBrandListUIProps {
    // data: {
    //     fetchUseditems: Array<Useditem>;
    // };
    data: any;

    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    onLoadMore: () => void;
    onClickMoveToNew: () => void;
    keyword: string;
    setKeyword: Function;
    isMatched: boolean;
    onClickMoveToBrandDetail: MouseEventHandler<HTMLDivElement>;
    loadingMessage: string;
}

export interface IProps {
    isMatched: boolean;
}
