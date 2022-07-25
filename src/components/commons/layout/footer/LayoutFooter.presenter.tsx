import * as S from "./LayoutFooter.styles";
import { IFooterUI } from "./LayoutFooter.types";

export default function FooterUI(props: IFooterUI) {
    return (
        <S.Wrapper>
            <S.LogoWrapper>
                <S.Logo src="/images/footerLogo.png" alt="logo"></S.Logo>
            </S.LogoWrapper>
            <S.CompanyWrapper>
                <S.Company>회사소개</S.Company>
                <S.Terms>이용약관</S.Terms>
                <S.Info>개인정보처리방침</S.Info>
                <S.Law>고객센터</S.Law>
                <S.App>App 설치</S.App>
            </S.CompanyWrapper>
            <S.InfoWrapper>
                <S.Github src="images/footergithub.svg" onClick={props.onClickToGithub} />
                <S.EmailWrapper>
                    <div className="tooltip">
                        <span className="tooltiptext">s2s2hyun0601@gmail.com</span>
                        <S.Email src="images/footeremail.svg" />
                    </div>
                </S.EmailWrapper>
            </S.InfoWrapper>
        </S.Wrapper>
    );
}
