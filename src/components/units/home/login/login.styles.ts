import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 871px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Login = styled.div`
    font-weight: 400;
    font-size: 40px;
    line-height: 100%;
    margin-top: 95px;
`;

export const Divider = styled.div`
    width: 1737.5px;
    border: 1px solid #555555;
    margin-top: 114px;
`;

export const LoginForm = styled.form``;

export const LoginWrapperCenter = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IdWrapper = styled.div`
    margin-top: 174px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

export const Id = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    margin-right: 53px;
`;

export const LoginInput = styled.input`
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

export const PwWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Pw = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    margin-right: 30px;
`;

export const LoginButton = styled.button`
    margin-left: 31px;
    width: 186px;
    height: 136px;
    background: #000000;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    color: #ffffff;
`;
