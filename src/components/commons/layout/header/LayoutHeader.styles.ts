import styled from "@emotion/styled";
// import { breakPoints } from "../../media/media";

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.img`
    width: 100%;
    height: 4.9rem;
    cursor: pointer;
    /* @media (max-width: 720px) {
    } */
`;

export const OptionWrapper = styled.div`
    display: flex;
`;

export const NoLog = styled.div``;

export const Login = styled.a`
    padding-right: 66px;
    font-weight: 600;
    font-size: 1.4rem;
    color: #000000;
    cursor: pointer;
    @media (max-width: 720px) {
        padding: 10px;
        font-size: 12px;
    }
`;

export const Signup = styled.a`
    /* padding-top: 37px;
    padding-bottom: 46.58px; */
    padding-right: 56px;
    font-weight: 600;
    font-size: 1.4rem;
    color: #000000;
    cursor: pointer;
    @media (max-width: 720px) {
        padding: 10px;
        font-size: 12px;
    }
`;

export const BasketWrapper = styled.div`
    display: flex;
`;

export const Basket = styled.a`
    padding-right: 5px;
    font-weight: 600;
    font-size: 1.4rem;
    color: #000000;
    cursor: pointer;
    @media (max-width: 720px) {
        padding-top: 3px;
        font-size: 12px;
    }
`;

// export const BasketCountWrpper = styled.div``;

export const BasketCount = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background: #f65656;
    font-weight: 400;
    font-size: 1.2rem;
    color: #ffffff;
    cursor: pointer;
    @media (max-width: 720px) {
        font-size: 12px;
        width: 2rem;
        height: 2rem;
        margin-top: 3px;
    }
`;

export const UserInfo = styled.div`
    display: flex;
`;

export const WelcomeText = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 100%;
    margin-right: 7px;
`;

export const Point = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 100%;
    margin-right: 16px;
`;

export const Charge = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 100%;
    margin-right: 32px;
    cursor: pointer;
`;

export const LogOut = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 100%;
    margin-right: 45px;
    cursor: pointer;
`;
