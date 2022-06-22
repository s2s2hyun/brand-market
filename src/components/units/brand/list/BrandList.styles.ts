import styled from "@emotion/styled";
import { IProps } from "./BrandList.types";

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
`;

export const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 90px;
    margin-bottom: 116px;
`;

export const ItemWrapper = styled.div`
    width: 348px;
    height: 560px;
    margin-right: 116px;
    margin-bottom: 50px;
`;

export const Picture = styled.img`
    width: 348px;
    height: 466px;
    background: #c4c4c4;
`;

export const Name = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-top: 13px;
    padding-left: 20px;
    color: #555555;
`;

export const Price = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;

    color: #000000;
`;

export const MainList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 80%;
    margin-top: 46px;
`;

export const SellerProduct = styled.div`
    display: flex;
    margin-top: 18px;
    padding-left: 20px;
`;

export const BestTag = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-right: 15px;
    color: #f65656;
`;

export const Remark = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    padding-top: 13px;
    padding-left: 20px;
    color: #555555;
`;

export const Word = styled.span`
    color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
