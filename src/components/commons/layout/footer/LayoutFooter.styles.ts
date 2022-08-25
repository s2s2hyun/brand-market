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
`;

// 회사소개
export const Company = styled.div`
    width: 8%;
    height: 2rem;
    border-right: 1px solid #dbdbdb;
    /* border: 1px solid red; */
    text-align: left;
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.05em;
    color: #000000;
`;

// 이용약관
export const Terms = styled.div`
    width: 8%;
    height: 2rem;
    padding-left: 2%;
    /* border: 1px solid red; */
    border-right: 1px solid #dbdbdb;
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.05em;
    color: #000000;
`;

// 개인정보처리방침
export const Info = styled.div`
    width: 12%;
    padding-left: 2%;
    height: 2rem;
    /* border: 1px solid red; */
    border-right: 1px solid #dbdbdb;
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.05em;
    color: #000000;
`;

// 고객센터
export const Law = styled.div`
    width: 8%;

    height: 2rem;
    padding-left: 2%;
    /* border: 1px solid red; */
    border-right: 1px solid #dbdbdb;
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.05em;
    color: #000000;
`;

// App 설치
export const App = styled.div`
    width: 8%;
    padding-left: 2%;
    height: 2rem;
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: -0.05em;
    color: #000000;
    /* border: 1px solid red; */
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
    width: 90%;
    margin-top: 100px;
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
