import * as S from "./LayoutFooter.styles";

export default function FooterUI() {
    return (
        <S.Wrapper>
            <S.LogoWrapper>
                <S.Logo src="/images/footerLogo.png" alt="logo"></S.Logo>
            </S.LogoWrapper>
            <S.Company>
                <S.CompanyD> (주) 딩코</S.CompanyD>
                <S.Name>대표:안주엽</S.Name>
            </S.Company>
            <S.Buisness>사업자등록번호:717-87-02373</S.Buisness>
            <S.Address>주소:서울특별시 구로구 디지털로 300, 패스트파이브</S.Address>
            <S.Academy>학원 등록 번호:제 5845호</S.Academy>
            <S.Law>
                <S.Solo>개인정보 처리방침</S.Solo>
                <S.Service>서비스 이용 약관</S.Service>
            </S.Law>
            <S.Corp>Copyright ©2022.Dingco Corp.,Ltd.</S.Corp>
        </S.Wrapper>
    );
}
