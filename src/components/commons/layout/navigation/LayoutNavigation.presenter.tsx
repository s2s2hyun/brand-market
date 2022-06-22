import * as S from "./LayoutNavigation.styles";
import { ILayoutNavagationUIProps } from "./LayoutNavigation.types";

export default function NavigationUI(props: ILayoutNavagationUIProps) {
    return (
        <S.Wrapper>
            <S.Categories>
                <S.Brand onClick={props.onClickBrand}>BRAND</S.Brand>
                <S.Category>CATEGORY</S.Category>
                <S.Life>LIFE</S.Life>
                <S.Beauty>BEAUTY</S.Beauty>
                <S.BorderLine></S.BorderLine>
                <S.Style>#STYLE</S.Style>
                <S.Event>EVENT</S.Event>
            </S.Categories>
        </S.Wrapper>
    );
}
