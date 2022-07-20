import * as S from "./HomeLayoutNavigation.styles";
import { ILayoutHomeNavagationUIProps } from "./HomeLayoutNavigation.types";

export default function HomeNavigationUI(props: ILayoutHomeNavagationUIProps) {
    // console.log(props.router.asPath === "/login");
    // console.log(props.router.asPath === "/signup");
    return (
        <S.Wrapper>
            <S.LogoWrapper>
                <S.Logo src="/images/HomeNavi.png" alt="logo" onClick={props.onClickMain}></S.Logo>
            </S.LogoWrapper>
            <S.Categories>
                <S.Brand onClick={props.onClickBrand}>BRAND</S.Brand>
                <S.Category onClick={props.onClickBoard}>BOARD</S.Category>
                <S.Life>LIFE</S.Life>
                <S.Beauty>BEAUTY</S.Beauty>
                <S.BorderLine></S.BorderLine>
                <S.Style onClick={props.onClickMyPage}>#MYPAGE</S.Style>
                <S.Event>EVENT</S.Event>
            </S.Categories>
            <S.MemberOption>
                {props.router.asPath === "/login" && <S.Signup>회원가입</S.Signup>}
                {props.router.asPath === "/signup" && <S.Login>로그인</S.Login>}
                <S.BasketWrapper>
                    <S.Basket>장바구니</S.Basket>
                    <S.BasketCount>0</S.BasketCount>
                </S.BasketWrapper>
            </S.MemberOption>
        </S.Wrapper>
    );
}
