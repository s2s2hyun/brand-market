import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const BestWrapper = styled.section`
    /* height: 90%; */
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Best = styled.div`
    font-weight: 700;
    font-size: 2.2rem;
    color: #000000;
    padding-top: 73px;
    padding-bottom: 86px;
`;

export const BestList = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 80%;
    @media (max-width: 1180px) {
        justify-content: space-evenly;
    }
`;

export const ItemBestWrapper = styled.article`
    padding: 1rem;
    width: 25%;
    cursor: pointer;
`;

export const PictureWrapper = styled.div`
    width: 100%;
    aspect-ratio: 0.9;
    background: #c4c4c4;
`;

export const BestPicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    &.noImage {
        object-fit: contain;
    }
`;

export const SellerProduct = styled.article`
    display: flex;
    padding-top: 18px;
    padding-left: 20px;
`;

export const BestName = styled.p`
    font-weight: 550;
    font-size: 1.7rem;
    letter-spacing: -0.05em;
    padding-top: 13px;
    padding-left: 20px;
    color: #555555;
`;

export const BestPrice = styled.h3`
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.05em;

    color: #000000;
`;

export const BestTag = styled.h3`
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.05em;
    margin-right: 15px;
    color: #f65656;
`;

export const BestRemark = styled.p`
    font-weight: 550;
    font-size: 1.7rem;
    padding-top: 13px;
    padding-left: 20px;
    color: #555555;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
