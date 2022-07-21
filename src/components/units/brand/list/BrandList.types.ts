import { ChangeEvent, MouseEventHandler } from "react";
import { SetterOrUpdater } from "recoil";
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
    // setTodayProductItem: SetterOrUpdater<any>;
    // onClickMoveToBrandDetail: MouseEventHandler<HTMLDivElement>;
    loadingMessage: string;
    onClickMoveToBrandDetail: (el: any) => (event: any) => void;
}

export interface IProps {
    isMatched: boolean;
}
