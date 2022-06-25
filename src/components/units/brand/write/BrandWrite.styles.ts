import styled from "@emotion/styled";

export const Wrapper = styled.div`
    max-width: 1828.5px;
    width: 100%;
    height: 100%;
    background: #ffffff;
    & > div {
        & > div:first-of-type {
            min-width: 170px;
        }
    }
    & > div:nth-of-type(14) {
        & > div:first-of-type {
            min-width: inherit;
        }
    }
`;

export const TopWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const BrandTitle = styled.div`
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #000000;
    padding-top: 104px;
    padding-left: 128px;
    padding-bottom: 31px;
`;

export const DivderLine = styled.div`
    width: 1737.5px;
    height: 0px;
    border: 3px solid #555555;
    margin-left: 91px;
`;

export const WriteForm = styled.form``;

export const BrandNameWarpper = styled.div`
    display: flex;
    align-items: center;
`;

export const Name = styled.div`
    width: 5%;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    /* letter-spacing: -0.05em; */
    margin-top: 60px;
    margin-bottom: 53px;
    margin-left: 134px;
    color: #000000;
`;

export const BrandTagInnerWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    input {
        border: 1px solid #767676;
        border-left: none;
        :focus {
            outline: none;
        }
    }
`;

export const BrandTags = styled.div`
    display: flex;
    align-items: center;
    padding: 1px 2px;
    height: 56px;
    background: #e9e9e9;
    border: 1px solid #767676;
    border-right: none;

    span {
        padding: 1px 2px;
        margin-right: 10px;
        background: #ffffff;
        border-radius: 1rem;
        word-break: keep-all;
        width: max-content;
    }

    span:last-of-type {
        margin-right: 0;
    }
`;

export const BrandInput = styled.input`
    width: 100%;
    height: 56px;
    background: #e9e9e9;
`;

export const BrandDivderLine = styled.div`
    width: 1737.5px;
    height: 0px;
    border: 1px solid #555555;
    margin-left: 91px;
`;

export const BrandRemarkWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Remark = styled.div`
    width: 6%;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-top: 55px;
    margin-bottom: 53px;
    margin-left: 120px;

    color: #000000;
`;

export const BrandContentsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Contents = styled.div`
    width: 6%;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-top: 55px;
    margin-bottom: 415px;
    margin-left: 120px;

    color: #000000;
`;

export const BrandPriceWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Price = styled.div`
    width: 7%;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-top: 55px;
    margin-bottom: 53px;
    margin-left: 115px;
    padding-left: 15px;

    color: #000000;
`;

export const BrandTagWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Tag = styled.div`
    width: 6%;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-top: 55px;
    margin-bottom: 53px;
    margin-left: 134px;

    color: #000000;
`;

export const BrandMap = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-left: 134px;
    margin-top: 55px;
    margin-bottom: 30px;
`;

export const MapWrapper = styled.div`
    display: flex;
`;

export const Map = styled.div``;

export const MapInputWarpper = styled.div`
    width: 100%;
`;

export const SearchWrapper = styled.div`
    display: flex;
`;

export const Zipcode = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #bdbdbd;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #bdbdbd;
    padding-left: 16px;
    margin-right: 16px;
    margin-bottom: 26px;
`;

export const SearchButton = styled.button`
    width: 124px;
    height: 51px;
    background: #000000;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #ffffff;
    background: #000000;
`;

export const MapInput = styled.input`
    width: 100%;
    height: 56px;
    margin-bottom: 25px;
    background: #e9e9e9;
`;

export const Input = styled.input`
    width: 100%;
    height: 56px;
    margin-bottom: 25px;
    background: #e9e9e9;
`;

export const BrandPhoto = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    margin-top: 55px;
    margin-bottom: 53px;
    margin-left: 134px;
`;

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

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 73px;
    margin-bottom: 113px;
`;

export const CancleButton = styled.button`
    width: 195px;
    height: 77px;
    background: #ffffff;
    border: 1px solid #000000;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-right: 16px;
    color: #000000;
`;

export const SubmitButton = styled.button`
    width: 195px;
    height: 77px;
    background: #000000;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;

    color: #ffffff;
`;
