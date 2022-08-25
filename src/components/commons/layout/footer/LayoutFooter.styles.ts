import styled from "@emotion/styled";

export const Wrapper = styled.footer`
    width: 100%;
    height: 31.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.img``;

export const CompanyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 720px) {
        flex-direction: column;
    }
`;

// 회사소개
export const Company = styled.div`
    word-break: keep-all;
    height: 2rem;
    padding: 0 1.5rem;
    border-right: 1px solid #dbdbdb;
    text-align: left;
    font-weight: 400;
    font-size: 1.4rem;
    color: #000000;
    @media (max-width: 720px) {
        font-size: 14px;
        padding-right: 10px;
        border: none;
    }
`;

// 이용약관
export const Terms = styled.div`
    height: 2rem;
    padding: 0 1.5rem;
    border-right: 1px solid #dbdbdb;
    font-weight: 400;
    font-size: 1.4rem;
    color: #000000;
    word-break: keep-all;
    @media (max-width: 720px) {
        font-size: 14px;
        padding-right: 10px;
        border: none;
    }
`;

// 개인정보처리방침
export const Info = styled.div`
    padding: 0 1.5rem;
    height: 2rem;
    border-right: 1px solid #dbdbdb;
    font-weight: 400;
    font-size: 1.4rem;
    color: #000000;
    word-break: keep-all;
    @media (max-width: 720px) {
        font-size: 14px;
        border: none;
    }
`;

// 고객센터
export const Law = styled.div`
    height: 2rem;
    padding: 0 1.5rem;
    border-right: 1px solid #dbdbdb;
    font-weight: 400;
    font-size: 1.4rem;
    color: #000000;
    word-break: keep-all;
    @media (max-width: 720px) {
        font-size: 14px;
        border: none;
    }
`;

// App 설치
export const App = styled.div`
    padding-left: 1.5rem;
    height: 2rem;
    font-weight: 400;
    font-size: 1.4rem;
    color: #000000;
    word-break: keep-all;
    @media (max-width: 720px) {
        font-size: 14px;
        border: none;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    /* max-width: 1200px; */
    width: 100%;
    padding-top: 100px;
`;

export const Github = styled.img`
    cursor: pointer;
`;

export const Email = styled.img``;

export const EmailWrapper = styled.div`
    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        display: none;
        position: absolute;
        top: 50%;
        left: calc(100% + 10px);
        transform: translateY(-50%);
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 0.5rem 1rem;
        font-weight: 550;
        font-size: 2.4rem;
    }
    .tooltip:hover .tooltiptext {
        display: block;
    }
`;
