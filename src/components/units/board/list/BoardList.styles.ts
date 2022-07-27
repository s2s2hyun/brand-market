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
`;

export const BrandWrite = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 195px;
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
`;

export const SearchWrapper = styled.div`
    margin-right: 200px;
    margin-top: 130px;
    margin-bottom: 80px;
`;

export const Search = styled.input`
    width: 520px;
    border: none;
    border-bottom: 3px solid black;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding: 20px;
    input:focus {
        outline: none;
        border: none;
    }
    color: #000000;
`;

export const Lense = styled.img`
    width: 21px;
    height: 21px;
`;

export const Divider = styled.div`
    border: 1px solid #555555;
    width: 90%;
    margin-left: 82.5px;
    margin-bottom: 122.5px;
`;

export const BoardListWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ListWrapper = styled.div`
    width: 1200px;
    height: 80px;
    border: 1px solid #848484;
    border-radius: 16px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    cursor: pointer;
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
`;
export const BoardName = styled.div``;

export const BoardNumber = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 123.85%;
    color: #848484;
    padding: 10px 0 10px 32px;
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
`;

export const ImageCount = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 105.85%;
    padding-left: 10px;
    padding-right: 10px;
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
`;

export const Profile = styled.img`
    margin: 19px 10px 19.2px 10px;
`;

export const ProfileWrapper = styled.div``;

export const Writer = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 105.85%;
    text-decoration-line: underline;
    color: #000000;
`;

export const CreateAt = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 105.85%;
    color: #848484;
    padding-top: 8px;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 102.5px;
    margin-top: 106px;
`;
