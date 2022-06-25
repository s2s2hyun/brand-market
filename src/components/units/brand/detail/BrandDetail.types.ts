import { Query, Useditem } from "../../../../commons/types/generated/types";

export interface IBrandDetailUI {
    onClickPick: () => Promise<void>;
    onClickDelete: () => Promise<void>;
    data?: Pick<Query, "fetchUseditem">;
    // userData: any;
    onChangePassword: (event: any) => void;
    onClickUsedItemDelete: () => Promise<void>;
    isPicked: boolean;
    alertModal: boolean;
    modalContents?: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
    onClickExitAlertModal: () => void;
    onClickconfirmModal: () => void;
    onClickRoutingBrandModal: () => void;
    go: boolean;
    isMy: boolean | undefined;
    onClickBasket: (el: any) => () => void;
    onClickBuyBrand: () => Promise<void>;
    onClickBrandEdit: () => void;
}
