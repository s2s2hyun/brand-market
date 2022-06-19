import { Query } from "../../../../commons/types/generated/types";

export interface IBrandDetailUI {
    onClickPick: () => Promise<void>;
    onClickDelete: () => Promise<void>;
    data?: Pick<Query, "fetchUseditem">;
    // userData: any;
    onChangePassword: (event: any) => void;
    onClickUsedItemDelete: () => Promise<void>;
}
