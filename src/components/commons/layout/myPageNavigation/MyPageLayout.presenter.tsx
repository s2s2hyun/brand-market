import Link from "next/link";
import * as S from "./MyPageLayout.styles";
import { IMyPageNaviUIUIProps } from "./MyPageLayout.types";

const MENU = [
    {
        name: "장바구니",
        url: "/mypage/basket",
    },
    {
        name: "최근 본 상품",
        url: "/mypage/todayProduct",
    },
    {
        name: "구매한 상품",
        url: "/mypage/buyProduct",
    },

    {
        name: "판매한 상품",
        url: "/mypage/sellProduct",
    },
];

export default function MyPageNaviUI(props: IMyPageNaviUIUIProps) {
    return (
        <S.Wrapper>
            <S.Menu>
                <div>마이페이지</div>
                {MENU.map((el) => (
                    <li>
                        <Link href={{ pathname: el.url }} passHref>
                            <S.MenuName
                                className={props.router.asPath.includes(el.url) ? "isActive" : ""}
                            >
                                {el.name}
                            </S.MenuName>
                        </Link>
                    </li>
                ))}
            </S.Menu>
        </S.Wrapper>
    );
}
