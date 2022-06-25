import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const BestWrapper = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 130px;
`;

export const Best = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    color: #000000;
    margin-top: 73px;
    margin-bottom: 86px;
`;

export const BestList = styled.div`
    display: flex;
`;

export const ItemBestWrapper = styled.div`
    margin-right: 116px;
    cursor: pointer;
`;

export const BestPicture = styled.img`
    width: 348px;
    height: 466px;
`;

export const SellerProduct = styled.div`
    display: flex;
    margin-top: 18px;
    padding-left: 20px;
`;

export const BestName = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.05em;
    padding-top: 13px;
    padding-left: 20px;
    color: #555555;
`;

export const BestPrice = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;

    color: #000000;
`;

export const BestTag = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    margin-right: 15px;
    color: #f65656;
`;

export const BestRemark = styled.div`
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
