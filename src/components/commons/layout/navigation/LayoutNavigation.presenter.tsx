import * as S from "./LayoutNavigation.styles";
import { ILayoutNavagationUIProps } from "./LayoutNavigation.types";

export default function NavigationUI(props: ILayoutNavagationUIProps) {
    return (
        <S.Wrapper>
            <S.Categories>
                <S.Brand onClick={props.onClickBrand}>BRAND</S.Brand>
                <S.Category onClick={props.onClickBoard}>BOARD</S.Category>
                <S.Life>LIFE</S.Life>
                <S.Beauty>BEAUTY</S.Beauty>
                <S.BorderLine></S.BorderLine>
                <S.Style>#MYPAGE</S.Style>
                <S.Event>EVENT</S.Event>
            </S.Categories>
        </S.Wrapper>
    );
}
