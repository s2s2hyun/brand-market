import styled from "@emotion/styled";
import { IProps } from "./BrandList.types";

export const Wrapper = styled.section`
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

    width: 13rem;
    height: 5rem;
    background: #ffffff;
    border: 1px solid #000000;
    margin-bottom: 17.5px;
    margin-left: 97px;
    margin-top: 2.4rem;

    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    cursor: pointer;
    color: #000000;
`;

export const SearchWrapper = styled.div`
    margin-right: 155px;
    margin-top: 130px;
    margin-bottom: 80px;
`;

export const Search = styled.input`
    width: 33rem;
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
`;

export const Lense = styled.img`
    width: 21px;
    height: 21px;
`;

export const Divider = styled.div`
    border: 1px solid #555555;
    width: 90%;
    /* margin-left: 82.5px; */
`;

export const BrandWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListWrapper = styled.article`
    /* display: flex;
    align-items: center;
    flex-direction: column; */
    max-width: 1740px;
    width: 90%;
    padding-top: 2rem;
`;

export const MainList = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1180px) {
        justify-content: space-evenly;
    }
`;

export const ItemWrapper = styled.article`
    padding-bottom: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`;

export const PictureWrapper = styled.div`
    width: 348px;
    height: 466px;
    background: #c4c4c4;
`;

export const Picture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    &.noImage {
        object-fit: contain;
    }
`;

export const Name = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-left: 20px;
    color: #555555;
`;

export const Price = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;

    color: #000000;
`;

export const SellerProduct = styled.div`
    display: flex;
    margin-top: 18px;
    padding-left: 20px;
`;

export const BestTag = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-right: 15px;
    color: #f65656;
`;

export const Remark = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    padding-left: 20px;
    color: #555555;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Word = styled.span`
    color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
