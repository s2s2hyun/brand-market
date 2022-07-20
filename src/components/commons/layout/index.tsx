import styled from "@emotion/styled";
import Layoutheader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import HomeLayoutNavigation from "./homeNavigation/HomeLayoutNavigation.container";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import MyPageNavi from "./myPageNavigation/myPageLayout.container";

const Body = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;
`;

const MyPage = styled.main`
    display: flex;
    width: 100%;

    & > div {
        :first-of-type {
            width: 20%;
        }
        :last-of-type {
            background-color: orange;
        }
    }
`;

const BodyWrapper = styled.div`
    display: flex;
    background-color: #ffffff;
`;

interface ILayoutProps {
    children: ReactNode;
}

const HIDDEN_HEADER = ["/login", "/signup"];
const SHOW_NAVI = ["/login", "/signup"];
const SHOW_MYPAGE_NAVI = [
    "/mypage",
    "/mypage/buyProduct",
    "/mypage/sellProduct",
    "/mypage/todayProduct",
];

export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    const isHidden = HIDDEN_HEADER.includes(router.asPath);
    const isShow = SHOW_NAVI.includes(router.asPath);
    const isMyPage = SHOW_MYPAGE_NAVI.includes(router.asPath);
    return (
        <>
            {!isHidden && <Layoutheader />}
            {/* <Layoutheader /> */}
            {isShow ? <HomeLayoutNavigation /> : <LayoutNavigation />}

            <BodyWrapper>
                {/* {(router.asPath.includes("/mypage") && (
                    <MyPage>
                        <div>
                            <div>마이페이지</div>
                            <div>오늘본 상품</div>
                            <div>찜한 목록</div>
                        </div>
                        <Body>{props.children}</Body>
                    </MyPage>
                )) || <Body>{props.children}</Body>} */}
                {isMyPage ? (
                    <div>
                        <MyPageNavi />
                        <Body>{props.children}</Body>
                    </div>
                ) : (
                    <Body>{props.children}</Body>
                )}
                {/* <Body>{props.children}</Body> */}
            </BodyWrapper>
            <LayoutFooter />
        </>
    );
}
