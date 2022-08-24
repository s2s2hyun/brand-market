import styled from "@emotion/styled";

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
`;

export const SignupForm = styled.form``;

export const SignUpPageWrapper = styled.div`
    display: flex;
`;

export const PictureWrapper = styled.div`
    background: #ebfcf4;
    width: 50%;
`;

export const SignUpPicture = styled.img`
    width: 100%;
    height: 100%;
`;

export const SignUpWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > div:nth-of-type(1) {
        font-size: 36px;
        font-weight: 500;
    }

    button {
        width: 70%;
        height: 3.886rem;
        background: #7ebcc3;
        border-radius: 7px;
        border: 2px solid #7ebcc3;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 20px;
        color: #ffffff;
    }
    & > button:nth-of-type(1) {
        margin-bottom: 20.14px;
    }
    & > button:nth-of-type(2) {
        background: #000000;
    }
`;

export const SignUpInputWrapper = styled.div`
    width: 70%;

    div {
        font-size: 1.6rem;
        font-weight: 500;
        padding-bottom: 1.763rem;
        padding-top: 1.763rem;
    }

    input {
        width: 100%;
        height: 3.886rem;
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

    & > input:nth-of-type(3) {
        ::placeholder {
            background-image: url(/images/passwordemoji.svg);
            background-repeat: no-repeat;
            background-position: right;
        }
    }

    & > input:nth-of-type(4) {
    }
`;

export const Error = styled.div`
    font-weight: 500;
    font-size: 1.6rem;
    text-transform: capitalize;
    color: #ef3030;
`;
