import styled from "@emotion/styled";
import Layoutheader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import HomeLayoutNavigation from "./homeNavigation/HomeLayoutNavigation.container";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;
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

export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    const isHidden = HIDDEN_HEADER.includes(router.asPath);
    const isShow = SHOW_NAVI.includes(router.asPath);
    console.log(router);

    return (
        <>
            {!isHidden && <Layoutheader />}
            {/* <Layoutheader /> */}
            {isShow ? <HomeLayoutNavigation /> : <LayoutNavigation />}

            <BodyWrapper>
                <Body>{props.children}</Body>
            </BodyWrapper>
            <LayoutFooter />
        </>
    );
}
