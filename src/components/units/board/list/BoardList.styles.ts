import styled from "@emotion/styled";
import { IBoardListStyleProps } from "./BoardList.types";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 750px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const BrandWrite = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14%;
    height: 77px;
    background: #ffffff;
    border: 1px solid #000000;
    margin-bottom: 17.5px;
    margin-left: 97px;
    margin-top: 37px;

    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    cursor: pointer;
    color: #000000;

    @media (max-width: 768px) {
        width: 30%;
        margin-left: 30px;
    }
    @media (max-width: 750px) {
        width: 90%;
        margin-left: 10px;
    }
`;

export const SearchWrapper = styled.div`
    padding-right: 5%;
    padding-top: 9%;
    padding-bottom: 5%;
    @media (max-width: 750px) {
        display: flex;
        padding-left: 20%;
    }
`;

export const Search = styled.input`
    width: 92%;
    border: none;
    border-bottom: 3px solid black;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.05em;
    padding: 20px;
    input:focus {
        outline: none;
        border: none;
    }
    color: #000000;
    @media (max-width: 750px) {
        width: 100%;
    }
    @media (max-width: 749px) {
        width: 100%;
    }
`;

export const Lense = styled.img`
    width: 21px;
    height: 21px;
    @media (max-width: 750px) {
        width: 15px;
        height: 15px;
    }
`;

export const Divider = styled.div`
    border: 1px solid #555555;
    width: 90%;
    margin-left: 82.5px;
    margin-bottom: 122.5px;
    @media (max-width: 768px) {
        display: flex;
        width: 100%;
        margin: 20px 0;
    }
`;

export const BoardListWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ListWrapper = styled.div`
    width: 70%;
    height: 80px;
    border: 1px solid #848484;
    border-radius: 16px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    cursor: pointer;
    @media (max-width: 750px) {
        width: 100%;
    }
`;

export const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const BoardPicture = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 8px;
    padding: 10px 0 10px 10px;
    @media (max-width: 750px) {
        width: 25%;
    }
`;
export const BoardName = styled.div`
    @media (max-width: 750px) {
        display: flex;
        width: 70%;
    }
`;

export const BoardNumber = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 123.85%;
    color: #848484;
    padding: 10px 0 10px 32px;
    @media (max-width: 750px) {
        padding: 0px;
        font-size: 1.8rem;
    }
`;

export const BoardTitle = styled.div`
    width: 250px;
    font-weight: 700;
    font-size: 20px;
    line-height: 123.85%;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 0 10px 32px;
    @media (max-width: 750px) {
        width: 75%;
        font-size: 1.8rem;
        padding-left: 10px;
    }
`;

export const Word = styled.span`
    color: ${(props: IBoardListStyleProps) => (props.isMatched ? "orange" : "")};
`;

export const RightWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ImageIn = styled.img`
    width: 24px;
    height: 24px;
    @media (max-width: 750px) {
        display: none;
    }
`;

export const ImageCount = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 105.85%;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 750px) {
        display: none;
    }
`;

export const Like = styled.img`
    width: 24px;
    height: 24px;
`;

export const LikeCount = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 105.85%;
    padding-left: 10px;
    @media (max-width: 750px) {
        padding: 0px;
    }
`;

export const Profile = styled.img`
    margin: 19px 10px 19.2px 10px;
    @media (max-width: 750px) {
        margin: 0px;
    }
`;

export const ProfileWrapper = styled.div``;

export const Writer = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 105.85%;
    text-decoration-line: underline;
    color: #000000;
    @media (max-width: 750px) {
        padding-left: 5px;
    }
`;

export const CreateAt = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 105.85%;
    color: #848484;
    padding-top: 8px;
    @media (max-width: 750px) {
        padding-left: 5px;
    }
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 102.5px;
    margin-top: 106px;
    @media (max-width: 750px) {
        margin: 10% 0;
    }
`;
