import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 460px;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;
`;

export const Select = styled.select`
    width: 384px;
    height: 52px;
    border-bottom: 1px solid black;
    margin-bottom: 17px;
`;

export const Option = styled.option`
    width: 384px;
    height: 52px;
`;

export const Button = styled.button`
    width: 384px;
    height: 51px;
    padding: 14px 16px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: white;
    border: none;
    :hover {
        background-color: black;
    }
`;
