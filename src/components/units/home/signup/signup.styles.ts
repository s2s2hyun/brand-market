import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Join = styled.div`
    margin-top: 94px;
    font-weight: 400;
    font-size: 40px;
    line-height: 100%;
    color: #000000;
`;

export const Divider = styled.div`
    width: 1737.5px;
    border: 1px solid #555555;
    margin-top: 114px;
`;

export const SignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    & > div {
        & > div:first-of-type {
            min-width: 170px;
        }
    }
`;

export const SignupForm = styled.form``;

export const SignIdWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 41px;
    margin-left: 144px;
`;
export const Id = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #000000;
`;
export const SignPwWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 31px;
    margin-left: 144px;
`;
export const Password = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #000000;
`;

export const SignPwConfirmWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 31px;
    margin-left: 144px;
`;
export const PasswordConfirm = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #000000;
`;
export const SignNameWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 31px;
    margin-left: 144px;
`;
export const Name = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #000000;
`;
export const SignInput = styled.input`
    width: 611px;
    height: 56px;
    background: #e9e9e9;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    padding-left: 15px;
    ::placeholder {
        color: #a9a9a9;
    }
`;

export const SignUpButtonWrapper = styled.div`
    margin-top: 68px;
    margin-bottom: 101px;
`;

export const CancleButton = styled.button`
    margin-right: 21px;
    width: 186px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #000000;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #000000;
`;

export const SignupButton = styled.button`
    width: 186px;
    height: 56px;
    background: #000000;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #ffffff;
`;
