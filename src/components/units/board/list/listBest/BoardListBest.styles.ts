import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const BoardBest = styled.div`
    display: flex;
    justify-content: center;
    & > div:nth-of-type(1) {
        font-weight: 700;
        font-size: 22px;
        line-height: 100%;
        color: #000000;
        padding-top: 100px;
        padding-bottom: 76.63px;
    }
`;

export const BoardBestList = styled.div`
    display: flex;
    justify-content: center;
`;

export const BoardBestWrapper = styled.div`
    width: 25%;
    padding: 2rem;
    cursor: pointer;
`;

export const PictureWrapper = styled.div`
    width: 100%;
    height: 172.9px;
    aspect-ratio: 0.9;
`;

export const BestPicture = styled.img`
    width: 100%;
    height: 172.9px;
    border-radius: 20px 20px 0px 0px;
    &.noImage {
        object-fit: contain;
    }
`;

export const BestBox = styled.div`
    height: 197.39px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`;

export const BestTitle = styled.div`
    font-style: normal;
    font-weight: 550;
    font-size: 18px;
    color: #000000;
    padding: 28.82px 172.9px 47.82px 28.82px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const BoxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProfileBox = styled.div`
    display: flex;
    padding: 0 0 27.11px 28.82px;
`;

export const Profile = styled.img`
    width: 24px;
    height: 24px;
`;

export const ProfileName = styled.div`
    padding-left: 4px;
    font-weight: 550;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`;

export const LikeBox = styled.div``;

export const CreateAt = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #828282;
    padding-left: 28.82px;
`;

export const RightWrapper = styled.div``;

export const LikeThumb = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 42.22px;
    margin-bottom: 2px;
`;

export const LikeCount = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #000000;
`;
