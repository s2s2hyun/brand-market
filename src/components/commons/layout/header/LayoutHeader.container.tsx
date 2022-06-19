import HeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { User } from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER, LOGOUT } from "./LayoutHeader.queries";
import { accessTokenState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

export default function HeaderContainer() {
    const router = useRouter();
    // const [, setAccessToken] = useRecoilState(accessTokenState);
    const { data: myData } = useQuery<{ fetchUserLoggedIn: User }>(FETCH_LOGIN_USER);

    const onClickMain = () => {
        router.push(`/`);
    };

    const onClickLogin = () => {
        router.push(`/login`);
    };

    const onClickSignUp = () => {
        router.push(`/signup`);
    };

    const onClickBasket = () => {
        router.push(`/basket`);
    };

    const [logout] = useMutation(LOGOUT);
    const onClickLogOut = () => {
        logout();
        // setAccessToken("");
        router.push(`/`);
        location.reload();
    };

    return (
        <HeaderUI
            onClickMain={onClickMain}
            onClickLogin={onClickLogin}
            onClickSignUp={onClickSignUp}
            onClickBasket={onClickBasket}
            myData={myData}
            onClickLogOut={onClickLogOut}
        />
    );
}
