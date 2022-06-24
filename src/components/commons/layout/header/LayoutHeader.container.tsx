import HeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { Useditem, User } from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER, LOGOUT } from "./LayoutHeader.queries";
import { accessTokenState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

export default function HeaderContainer() {
    const router = useRouter();
    // const [, setAccessToken] = useRecoilState(accessTokenState);
    const { data: myData } = useQuery<{ fetchUserLoggedIn: User }>(FETCH_LOGIN_USER);

    // 장바구니 카운팅
    const [baskets, setbaskets] = useState([]);

    useEffect(() => {
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
        setbaskets(baskets.length);
    }, []);

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
            baskets={baskets}
        />
    );
}
