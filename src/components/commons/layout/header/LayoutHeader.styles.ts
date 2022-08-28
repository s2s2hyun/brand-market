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
    @media (max-width: 720px) {
        width: 80%;
    }
`;

export const OptionWrapper = styled.div`
    display: flex;
`;

export const NoLog = styled.div`
    @media (max-width: 720px) {
        width: 100%;
        display: flex;
        align-items: center;
    }
`;

export const Login = styled.a`
    padding-right: 66px;
    font-weight: 600;
    font-size: 1.4rem;
    color: #000000;
    cursor: pointer;
    @media (max-width: 720px) {
        font-size: 12px;
        padding-right: 10px;
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
        font-size: 12px;
        padding-right: 2px;
    }
`;

export const BasketWrapper = styled.div`
    display: flex;
    @media (max-width: 768px) {
        width: 130px;
        align-items: center;
    }
`;

export const Basket = styled.a`
    padding-right: 5px;
    font-weight: 600;
    font-size: 1.4rem;
    color: #000000;
    cursor: pointer;
    @media (max-width: 720px) {
        padding-top: 2px;
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
        margin-top: 1px;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    @media (max-width: 720px) {
        width: 100%;
        /* display: flex; */
    }
`;

export const WelcomeText = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    padding-right: 7px;
    color: #000000;
    @media (max-width: 720px) {
        font-size: 12px;
        width: 50px;
        padding-top: 2px;
    }
`;

export const Point = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    padding-right: 16px;
    color: #000000;
    @media (max-width: 720px) {
        font-size: 12px;
        padding-right: 3px;
        display: none;
    }
`;

export const Charge = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    padding-right: 32px;
    color: #000000;
    cursor: pointer;
    @media (max-width: 720px) {
        font-size: 12px;
        padding-right: 5px;
        width: 25%;
        padding-top: 2px;
    }
`;

export const LogOut = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    padding-right: 45px;
    color: #000000;
    cursor: pointer;
    @media (max-width: 720px) {
        font-size: 12px;
        padding-right: 3px;
        width: 50%;
        padding-top: 2px;
    }
`;
