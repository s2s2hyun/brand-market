import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div``;

export const CommentTop = styled.div``;

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
`;

export const Password = styled.input`
    width: 180px;
    height: 52px;
    border: 1px solid #bdbdbd;
`;

export const Star = styled(Rate)``;
