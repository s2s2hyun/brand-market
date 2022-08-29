import styled from "@emotion/styled";

export const Wrapper = styled.section`
    width: 90%;
    height: 100%;
`;

export const TopWrapper = styled.article`
    display: flex;
    padding-top: 87px;
    @media (max-width: 769px) {
        padding-top: 50px;
    }
`;

export const LeftTopWrapper = styled.article`
    width: 50%;
    margin-right: 58px;
    @media (max-width: 769px) {
        margin: 30px;
    }
`;

export const ImageWrapper = styled.div``;

export const ImageTop = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* margin-top: 68px; */
`;

export const RightTopWrapper = styled.div`
    /* padding-top: 87px; */
    width: 50%;
`;

export const AVANDRESS = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-bottom: 15px;
    color: #000000;
    @media (max-width: 769px) {
    }
`;

export const Name = styled.h3`
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-bottom: 97px;
    color: #000000;
    @media (max-width: 769px) {
        font-size: 2rem;
        padding-bottom: 10px;
    }
`;

export const PriceHeart = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
`;

export const PriceLine = styled.div`
    display: flex;
`;

export const Price = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.05em;
    /* padding-right: 65px; */
    color: #000000;
    @media (max-width: 767px) {
        font-size: 1.2rem;
        width: 60px;
    }
`;

export const ProductPrice = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-left: 65px;

    color: #000000;
    @media (max-width: 767px) {
        font-size: 1.4rem;
        width: 100%;
    }
`;

export const HeartLine = styled.div`
    display: flex;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const MyHeart = styled.div`
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    padding-right: 11px;
`;

export const Zzim = styled.img`
    width: 18px;
    height: 18px;
    cursor: pointer;

    :hover,
    &.isActive {
        filter: invert(39%) sepia(94%) saturate(6479%) hue-rotate(1deg) brightness(102%)
            contrast(107%);
    }
`;

export const Heart = styled.div`
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    padding-left: 11px;
`;

export const Remark = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-bottom: 49px;
    color: #000000;
`;

export const Tags = styled.div``;

export const BrandTags = styled.h3`
    display: flex;
`;

export const ProductHashTag = styled.h3`
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #f65656;
`;

export const ButtonWrapper = styled.div``;

export const BuyShopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const IsMyButton = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BuyButton = styled.button`
    width: calc(50% - 10px);
    height: 10rem;
    background: #000000;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: -0.05em;
    color: #ffffff;
    cursor: pointer;
    @media (max-width: 767px) {
        font-size: 2rem;
    }
`;

export const DelteButton = styled.button`
    width: calc(50% - 10px);
    height: 10rem;
    background: #000000;
    font-weight: 400;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.05em;

    color: #ffffff;
    @media (max-width: 767px) {
        font-size: 2rem;
    }
`;

export const ShoppingBag = styled.button`
    width: calc(50% - 10px);
    height: 10rem;
    background: #c4c4c4;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: -0.05em;
    margin-bottom: 20px;
    color: #ffffff;

    cursor: pointer;
    @media (max-width: 767px) {
        font-size: 1.5rem;
    }
`;

export const Retouch = styled.button`
    width: calc(50% - 10px);
    height: 10rem;
    background: #c4c4c4;
    font-weight: 400;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #ffffff;
    @media (max-width: 767px) {
        font-size: 1.4rem;
    }
`;

export const Detail = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-top: 175px;
    padding-left: 53px;
    color: #000000;
    @media (max-width: 767px) {
        padding: 80px 0px 0px 20px;
    }
`;

export const Divider = styled.div`
    width: 100%;
    border: 3px solid #555555;
    margin-top: 24px;
    margin-bottom: 45px;
`;

export const SubDivider = styled.div`
    width: 100%;
    border: 1px solid #c0c0c0;
    margin-top: 23px;
    margin-bottom: 31px;
`;

export const ThreeDivider = styled.div`
    border: 3px solid #555555;
    margin-top: 24px;
`;
export const BottomWrapper = styled.article``;

export const ImageBottomWrapper = styled.article`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const BottomImage = styled.div`
    max-width: 830px;
    width: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* margin-top: 68px; */
`;

export const DeliveryWrapper = styled.div``;

export const ContentsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContentsTitle = styled.h3`
    padding-top: 5rem;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.05em;

    color: #000000;
    @media (max-width: 767px) {
        font-size: 2.4rem;
    }
`;

export const Contents = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;

    color: #000000;
    @media (max-width: 767px) {
        font-size: 1.8rem;
    }
`;

export const DeliveryNoteWrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DeliveryNote = styled.h3`
    padding-left: 100px;
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    @media (max-width: 767px) {
        font-size: 1.8rem;
        padding: 0px 0px 10px 0px;
    }
`;
export const DeliveryNoteContent = styled.p`
    padding-left: 100px;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-bottom: 10px;

    color: #000000;
    @media (max-width: 767px) {
        font-size: 2rem;
        padding: 0px 0px 10px 0px;
    }
`;
