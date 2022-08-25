import * as S from "./LayoutNavigation.styles";
import { ILayoutNavagationUIProps } from "./LayoutNavigation.types";

export default function NavigationUI(props: ILayoutNavagationUIProps) {
    return (
        <S.Wrapper>
            <S.Categories>
                <S.Navi>
                    <S.Brand onClick={props.onClickBrand}>BRAND</S.Brand>
                    <S.Board onClick={props.onClickBoard}>BOARD</S.Board>
                    {/* <S.Mypage onClick={props.onClickMyPage}>#MYPAGE</S.Mypage> */}
                </S.Navi>
            </S.Categories>
        </S.Wrapper>
    );
}
