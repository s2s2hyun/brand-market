import styled from "@emotion/styled";

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

export const BoardListWrapper = styled.div``;

export const BoardPicture = styled.img`
    width: 60px;
    height: 60px;
`;
