import { ChangeEvent, MouseEventHandler } from "react";
import { IUseditem } from "../../../../commons/types/generated/types";

export interface IBrandListUIProps {
    // data: {
    //     fetchUseditems: Array<IUseditem>;
    // };
    data: any;

    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    onLoadMore: () => void;
    onClickMoveToNew: () => void;
    keyword: string;
    setKeyword: Function;
    isMatched: boolean;
    // onClickMoveToBrandDetail: MouseEventHandler<HTMLDivElement>;
    onClickMoveToBrandDetail: (el: any) => (event: any) => void;
    loadingMessage: string;
}

export interface IProps {
    isMatched: boolean;
}
