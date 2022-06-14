import { User } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIProps {
    onClickMain: () => void;
    onClickLogin: () => void;
    onClickSignUp: () => void;
    onClickBasket: () => void;
    myData: { fetchUserLoggedIn: User } | undefined;
    onClickLogOut: () => void;
}
