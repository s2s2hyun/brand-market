import styled from "@emotion/styled";

export const Wrapper = styled.footer`
    width: 100%;
    height: 31.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 720px) {
        height: 0;
    }
`;

export const LogoWrapper = styled.div`
    @media (max-width: 720px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Logo = styled.img`
    @media (max-width: 720px) {
        width: 50%;
    }
`;

export const CompanyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 720px) {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        padding-left: 9%;
    }
`;

// 회사소개
export const Company = styled.div`
    word-break: keep-all;
    height: 2rem;
    padding: 0 1.5rem;
    border-right: 1px solid #dbdbdb;
    text-align: left;
    font-weight: 500;
    font-size: 1.4rem;
    color: #000000;
    @media (max-width: 720px) {
        width: 25%;
        font-size: 13px;
        border-right: 1px solid #000000;
    }
`;

// 이용약관
export const Terms = styled.div`
    height: 2rem;
    padding: 0 1.5rem;
    border-right: 1px solid #dbdbdb;
    font-weight: 500;
    font-size: 1.4rem;
    color: #000000;
    word-break: keep-all;
    @media (max-width: 720px) {
        width: 25%;
        font-size: 13px;
        border-right: 1px solid #000000;
    }
`;

// 개인정보처리방침
export const Info = styled.div`
    padding: 0 1.5rem;
    height: 2rem;
    border-right: 1px solid #dbdbdb;
    font-weight: 500;
    font-size: 1.4rem;
    color: #000000;
    word-break: keep-all;
    @media (max-width: 720px) {
        width: 25%;
        font-size: 13px;
        border: none;
        /* border-right: 1px solid #000000; */
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
        width: 25%;
        font-size: 13px;
        border: none;
        display: none;
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
        font-size: 13px;
        border: none;
        display: none;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    /* max-width: 1200px; */
    width: 100%;
    padding-top: 100px;
    @media (max-width: 720px) {
        padding-top: 10%;
    }
`;

export const Github = styled.img`
    width: 125px;
    height: 125px;
    cursor: pointer;
    @media (max-width: 720px) {
        width: 90px;
        height: 90px;
    }
`;

export const Email = styled.img`
    width: 125px;
    height: 125px;
    @media (max-width: 720px) {
        width: 90px;
        height: 90px;
    }
`;

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
