import * as S from "./LayoutNavigation.styles";
import { ILayoutNavagationUIProps } from "./LayoutNavigation.types";

export default function NavigationUI(props: ILayoutNavagationUIProps) {
    return (
        <S.Wrapper>
            <S.Categories>
                <S.Navi>
                    <S.Brand onClick={props.onClickBrand}>BRAND</S.Brand>
                    <S.Category onClick={props.onClickBoard}>BOARD</S.Category>
                    <S.Mypage onClick={props.onClickMyPage}>#MYPAGE</S.Mypage>
                </S.Navi>
            </S.Categories>
        </S.Wrapper>
    );
}
