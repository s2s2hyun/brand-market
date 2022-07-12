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
    width: 846px;
    height: 775px;
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
        width: 60%;
        height: 38.86px;
        background: #7ebcc3;
        border-radius: 7px;
        border: 2px solid #7ebcc3;
        font-weight: 500;
        font-size: 14px;
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
        font-size: 16px;
        font-weight: 500;
        padding-bottom: 17.63px;
        padding-top: 17.63px;
    }

    input {
        width: 100%;
        height: 38.86px;
        border: 2px solid #7ebcc3;
        border-radius: 7px;
    }
    & > input:nth-of-type(1) {
        ::placeholder {
            background-image: url(/images/email.png);
            background-repeat: no-repeat;
            background-position: right;
        }
    }

    & > input:nth-of-type(2) {
        ::placeholder {
            background-image: url(/images/password.png);
            background-repeat: no-repeat;
            background-position: right;
        }
    }

    & > input:nth-of-type(3) {
        ::placeholder {
            background-image: url(/images/password.png);
            background-repeat: no-repeat;
            background-position: right;
        }
    }

    & > input:nth-of-type(4) {
        margin-bottom: 57.76px;
    }
`;
