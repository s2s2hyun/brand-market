import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div``;

export const CommentTop = styled.div`
    display: flex;
    margin-bottom: 41px;
`;

export const Emoji = styled.img`
    width: 32px;
    height: 32px;
`;

export const Comment = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
`;

export const InputWrapper = styled.div`
    display: flex;
`;

export const Writer = styled.input`
    width: 180px;
    height: 52px;
    border: 1px solid #bdbdbd;
    margin-right: 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    padding-left: 20px;
    ::placeholder {
        color: #828282;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
    }
`;

export const Password = styled.input`
    width: 180px;
    height: 52px;
    border: 1px solid #bdbdbd;
    margin-right: 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    padding-left: 20px;
    ::placeholder {
        color: #828282;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
    }
`;

export const Star = styled(Rate)``;

export const ContentsWrapper = styled.div`
    border: 1px solid lightgray;
    margin-top: 70px;
`;

export const Contents = styled.textarea`
    width: 1200px;
    height: 109px;
    background: #ffffff;
    resize: none;
    border: none;
    /* outline: 1px solid #bdbdbd; */
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    padding-left: 20px;
    ::placeholder {
        color: #828282;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
    }
`;

export const ContentsBottom = styled.div`
    display: flex;
`;

export const ContentMax = styled.div`
    width: 1108px;
    height: 52px;
    padding: 14px 0 14px 20px;
`;

export const Button = styled.button`
    width: 91px;
    height: 52px;
    background: #000000;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    cursor: pointer;
`;
