import { IUser } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIProps {
    onClickMain: () => void;
    onClickLogin: () => void;
    onClickSignUp: () => void;
    onClickBasket: () => void;
    myData: { fetchUserLoggedIn: IUser } | undefined;
    onClickLogOut: () => void;
    globalbaskets: never[];
}
