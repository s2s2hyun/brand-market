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
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BoardLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:first-of-type {
        font-weight: 500;
        font-size: 36px;
        color: #000000;
        padding-bottom: 81px;
    }

    & > div:nth-of-type(2) > div:nth-of-type(6) {
        font-weight: 550;
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

export const InputWrapper = styled.div`
    & > div:nth-of-type(2) {
        font-weight: 550;
        font-size: 16px;
        color: #000000;
        padding-left: 100px;
        padding-bottom: 16px;
    }
    & > div:nth-of-type(4) {
        font-weight: 550;
        font-size: 16px;
        color: #000000;
        padding-left: 100px;
    }

    & > div:nth-of-type(7) {
        font-weight: 550;
        font-size: 16px;
        color: #000000;
        padding-left: 100px;
        padding-bottom: 16px;
    }
    & > div:nth-of-type(9) {
        font-weight: 550;
        font-size: 16px;
        color: #000000;
        padding: 40px 0 16px 100px;
    }
    & > div:nth-of-type(11) {
        font-weight: 550;
        font-size: 16px;
        color: #000000;
        padding: 40px 0 16px 100px;
    }
`;

export const TopWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const WriterWrapper = styled.div`
    padding-right: 24px;
    margin-bottom: 40px;
    & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
        padding-bottom: 16px;
    }

    & > input:first-of-type {
        width: 486px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 8px;
        padding-left: 10px;
    }
`;

export const PasswordWrapper = styled.div`
    & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
        padding-bottom: 16px;
    }
    & > input:first-of-type {
        width: 486px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 8px;
        padding-left: 10px;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    & > input:first-of-type {
        width: 996px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 8px;
        padding-left: 10px;
    }
`;

export const Contents = styled.div`
    display: flex;
    align-items: center;
    /* & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    } */
`;

export const MapTitle = styled.div``;

export const MapWrapper = styled.div`
    display: flex;
    justify-content: center;
    & > div:first-of-type {
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    }
`;

export const MapInputWarpper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SearchWrapper = styled.div`
    margin-bottom: 24px;
`;

export const ZipCode = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #bdbdbd;
    padding-left: 10px;
`;

export const SearchButton = styled.button`
    width: 124px;
    height: 52px;
    background: #000000;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
`;

export const MapAddress = styled.div`
    & > input:first-of-type {
        width: 753px;
        height: 52px;
        border: 1px solid #000000;
        margin-bottom: 24px;
        border-radius: 8px;
        padding-left: 10px;
    }
    & > input:nth-of-type(2) {
        width: 753px;
        height: 52px;
        border: 1px solid #000000;
        border-radius: 8px;
        padding-left: 10px;
    }
`;

export const MapDetailInput = styled.input``;

export const Youtube = styled.div`
    display: flex;
    justify-content: center;
    & > input:first-of-type {
        width: 996px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 8px;
        padding-left: 10px;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    position: relative;
    margin-left: 100px;
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
    padding: 83px 0 83px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CancelButton = styled.button`
    width: 179px;
    height: 51px;
    background: #000000;
    border-radius: 8px;

    font-weight: 550;
    font-size: 16px;
    color: #ffffff;
    margin-right: 55px;
    cursor: pointer;
`;

export const SubmitButton = styled.button`
    cursor: pointer;
    width: 179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 550;
    border-radius: 8px;
    border: 1px solid #000000;

    background-color: ${(props: ISubmitButtonProps) => (props.isActive ? "yellow" : "none")};
`;

// export const DeleteButton = styled.button`
//     width: 179px;
//     height: 51px;
//     background: #000000;
//     border-radius: 8px;
//     margin-right: 55px;
//     font-weight: 400;
//     font-size: 16px;
//     color: #ffffff;
//     cursor: pointer;
// `;

export const Error = styled.div`
    font-weight: 500;
    font-size: 16px;
    text-transform: capitalize;
    color: #ef3030;
`;
