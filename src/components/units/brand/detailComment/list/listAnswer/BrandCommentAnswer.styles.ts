import styled from "@emotion/styled";

export const Answer = styled.div``;

export const Wrapper = styled.section``;

export const DividerWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const AnswerCommentDivider = styled.div`
    width: 90%;
    border: 1px dashed #c0c0c0;
    margin-bottom: 30px;
    margin-top: 30px;
`;

export const AnswerCommentWrapper = styled.article`
    margin-left: 200px;
    @media (max-width: 767px) {
        margin: 0px;
    }
`;

export const AnswerComment = styled.div`
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-bottom: 20px;
    color: #000000;
`;

export const AnswerCommentName = styled.div`
    width: 103px;
    height: 27px;
    background: #000000;
    margin-bottom: 20px;
    letter-spacing: -0.05em;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AnswerCreateAt = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-bottom: 30px;
    color: #999999;
`;

export const AnswerContents = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    padding-bottom: 40px;

    letter-spacing: -0.05em;

    color: #000000;
    @media (max-width: 767px) {
        width: 70%;
    }
`;

export const AnswerInfo = styled.div``;

export const AnswerCommentDelete = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 15px;

    cursor: pointer;
`;

export const AnswerCommentUpdate = styled.img`
    width: 20px;
    height: 20px;

    cursor: pointer;
`;

export const AnswerCommentOption = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 100px;
`;
