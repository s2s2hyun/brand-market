import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const AnswerDivier = styled.div``;

export const AnswerCommentWrite = styled.textarea`
    width: 100%;
    height: 152px;
    background: #e9e9e9;
    resize: none;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
`;

export const CancelButton = styled.button`
    width: 195px;
    height: 77px;

    background: #ffffff;
    border: 1px solid #000000;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;

    letter-spacing: -0.05em;

    color: #000000;
`;

export const Submit = styled.button`
    width: 195px;
    height: 77px;
    background: #000000;

    font-weight: 700;
    font-size: 20px;
    line-height: 100%;

    letter-spacing: -0.05em;
    cursor: pointer;
    color: #ffffff;
`;

export const Error = styled.div`
    font-weight: 500;
    font-size: 16px;
    text-transform: capitalize;
    color: #ef3030;
`;
