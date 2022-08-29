import styled from "@emotion/styled";

export const Scroll = styled.div`
    height: auto;
`;

export const Wrapper = styled.div``;

export const ItemWrapper = styled.section`
    width: 100%;
    height: 100%;
`;

export const CommentWrapper = styled.article``;

export const CommentDivider = styled.div`
    width: 100%;
    border: 1px solid #c0c0c0;
    margin-bottom: 40px;
    margin-top: 20px;
`;

export const CommentBottomDivider = styled.div`
    width: 80%;
    border: 1px dashed #c0c0c0;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const CommentLineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NameContents = styled.div`
    display: flex;
`;

export const OptionWrapper = styled.div`
    display: flex;
`;

export const CommentUserName = styled.div`
    width: 103px;
    height: 27px;
    background: #000000;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        font-size: 1.4rem;
    }
`;

export const CommentContents = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-left: 32px;
    color: #000000;
    /* @media (max-width: 767px) {
        width: 100%;
    } */
`;

export const CommentCreateAt = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-right: 38px;
    color: #000000;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const CommentWrite = styled.img`
    width: 20px;
    height: 20px;

    cursor: pointer;
    @media (max-width: 767px) {
        width: 15px;
        height: 15px;
    }
`;

export const CommentUpdate = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 16px;

    cursor: pointer;
    @media (max-width: 767px) {
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
`;

export const CommentDelete = styled.img`
    width: 20px;
    height: 20px;

    cursor: pointer;
    @media (max-width: 767px) {
        width: 15px;
        height: 15px;
    }
`;
