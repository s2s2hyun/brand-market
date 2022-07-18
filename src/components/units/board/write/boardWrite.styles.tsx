import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./boardWrite.types";

export const Wrapper = styled.div`
    width: 1920px;
    height: 2260px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BoradWrapper = styled.div`
    width: 1200px;
    height: 1847px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    /* margin: 198px, 300px, 215px, 420px; */
    /* & > div {
        & > div:first-of-type {
            font-weight: 500;
            font-size: 36px;
            color: #000000;
        }
    } */
`;

export const BoardLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:first-of-type {
        font-weight: 500;
        font-size: 36px;
        color: #000000;
    }

    & > div:nth-of-type(2) > div:nth-of-type(6) {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    }
    /* div:nth-of-type(4) {
        padding: px;
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    } */
`;

export const InputWrapper = styled.div``;

export const TopWrapper = styled.div`
    display: flex;
`;

export const WriterWrapper = styled.div`
    & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    }

    & > input:first-of-type {
        width: 486px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 8px;
    }
`;

export const PasswordWrapper = styled.div`
    & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    }
    & > input:first-of-type {
        width: 486px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 8px;
    }
`;

export const Title = styled.div`
    & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    }
    & > input:first-of-type {
        width: 996px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 8px;
    }
`;

export const Contents = styled.div`
    /* display: flex;
    align-items: center; */
    & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    }
`;

export const MapTitle = styled.div``;

export const MapWrapper = styled.div`
    display: flex;
    & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    }
`;

export const MapInputWarpper = styled.div``;

export const SearchWrapper = styled.div``;

export const ZipCode = styled.input``;

export const SearchButton = styled.button``;

export const MapAddress = styled.div`
    & > input:first-of-type {
        width: 753px;
        height: 52px;
        border: 1px solid #000000;
        border-radius: 8px;
    }
    & > input:nth-of-type(2) {
        width: 753px;
        height: 52px;
        border: 1px solid #000000;
        border-radius: 8px;
    }
`;

export const MapDetailInput = styled.input``;

export const Youtube = styled.div`
    & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    }
    & > input:first-of-type {
        width: 996px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 8px;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    margin-bottom: 76px;
    position: relative;
`;

export const UploadWrapper = styled.div`
    margin-right: 24px;
    position: relative;
    width: 180px;
    height: 180px;

    button:last-of-type {
        position: absolute;
        top: 0;
        right: 0;
    }

    &:last-of-type {
        button:last-of-type {
            display: none;
        }
    }
`;
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CancleButton = styled.button`
    width: 179px;
    height: 51px;
    background: #000000;
    border-radius: 8px;

    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
`;

export const SubmitButton = styled.button`
    cursor: pointer;
    width: 179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    background-color: ${(props: ISubmitButtonProps) => (props.isActive ? "yellow" : "none")};
`;
