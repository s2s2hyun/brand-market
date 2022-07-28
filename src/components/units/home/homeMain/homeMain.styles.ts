import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ListWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    /* margin-left: 90px; */
    max-width: 1740px;
    width: 90%;
    margin-bottom: 131px;

    & > div:nth-of-type(2) {
        width: 100%;
    }
`;

export const NewArrival = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    padding-top: 89px;
    padding-bottom: 98px;
`;

export const ItemWrapper = styled.article`
    width: 348px;
    height: 560px;
    /* margin-right: 116px;
    margin-bottom: 50px; */
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

export const SellerProduct = styled.div`
    display: flex;
    margin-top: 18px;
    padding-left: 20px;
`;

export const Price = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;

    color: #000000;
`;

export const BestTag = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-right: 15px;
    color: #f65656;
`;

export const Name = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-top: 13px;
    padding-left: 20px;
    color: #555555;
`;

export const Remark = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    padding-top: 13px;
    padding-left: 20px;
    color: #555555;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const MainList = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 80%;

    @media (max-width: 1180px) {
        justify-content: space-evenly;
    }
`;
