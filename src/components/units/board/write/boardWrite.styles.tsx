import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1920px;
    height: 2260px;
`;

export const BoradWrapper = styled.div`
    width: 1200px;
    height: 1847px;
    & > div {
        & > div:first-of-type {
            font-weight: 500;
            font-size: 36px;
            color: #000000;
        }
    }
`;

export const InputWrapper = styled.div``;

export const TopWrapper = styled.div``;

export const WriterWrapper = styled.div`
    & > div {
        & > div:first-of-type {
            font-weight: 500;
            font-size: 16px;
            color: #000000;
        }
    }
    & > input {
        & > input:first-of-type {
            width: 486px;
            height: 52px;
            background: #ffffff;
            border: 1px solid #000000;
            border-radius: 8px;
        }
    }
`;

export const PasswordWrapper = styled.div`
    & > div {
        & > div:first-of-type {
            font-weight: 500;
            font-size: 16px;
            color: #000000;
        }
    }
    & > input {
        & > input:first-of-type {
            width: 486px;
            height: 52px;
            background: #ffffff;
            border: 1px solid #000000;
            border-radius: 8px;
        }
    }
`;

export const Title = styled.div``;

export const Contents = styled.div``;

export const MapWrapper = styled.div``;

export const MapIntputWrapper = styled.div``;

export const SearchWrapper = styled.div``;

export const ZipCode = styled.input``;

export const SearchButton = styled.button``;

export const MapInput = styled.input``;

export const MapDetailInput = styled.input``;

export const Youtube = styled.div``;

export const ImageWrapper = styled.div`
    display: flex;
    margin-left: 134px;
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
export const ButtonWrapper = styled.div``;

export const CancleButton = styled.button``;

export const SubmitButton = styled.button``;
