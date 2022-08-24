import styled from "@emotion/styled";

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
`;

export const LoginForm = styled.form``;

export const LoginPageWrapper = styled.div`
    display: flex;
`;

export const PictureWrapper = styled.div`
    background-color: #b97d8d14;
    width: 50%;
`;

export const LoginPicture = styled.img`
    width: 100%;
    height: 100%;
`;

export const LoginWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > div:nth-of-type(1) {
        font-size: 3.6rem;
        font-weight: 500;
        padding-bottom: 5.5rem;
    }

    span {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 19px;
        padding-top: 1.3rem;
        color: #000000;
        & span:last-of-type {
            color: #7ebcc3;
            cursor: pointer;
        }
    }
`;

export const InputsWrapper = styled.div`
    width: 70%;

    div {
        font-size: 1.6rem;
        font-weight: 500;
        padding-bottom: 2.1rem;
    }

    div:last-of-type {
        padding-top: 2.136rem;
    }

    input {
        width: 100%;
        height: 3.591rem;
        border: 2px solid #7ebcc3;
        border-radius: 7px;
    }
    & > input:nth-of-type(1) {
        ::placeholder {
            background-image: url(/images/emailemoji.svg);
            background-repeat: no-repeat;
            background-position: right;
        }
    }

    & > input:nth-of-type(2) {
        ::placeholder {
            background-image: url(/images/passwordemoji.svg);
            background-repeat: no-repeat;
            background-position: right;
        }
    }

    button {
        width: 100%;
        height: 35.91px;
        background: #7ebcc3;
        border-radius: 7px;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 20px;

        color: #ffffff;
    }
`;

export const Error = styled.div`
    font-weight: 500;
    font-size: 1.6rem;
    text-transform: capitalize;
    color: #ef3030;
`;
