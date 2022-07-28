import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DetailWrapper = styled.div`
    width: 1200px;
    height: 100%;
    box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Divider = styled.div`
    /* width: 996px; */
    width: 85%;
    height: 1px;
    background: #bdbdbd;
    margin-top: 21px;
`;

export const TopWrapper = styled.div`
    width: 100%;
    margin-top: 86px;
    display: flex;
    justify-content: space-between;
`;

export const LeftWrapper = styled.div`
    display: flex;
    margin-left: 102px;
`;

export const Photo = styled.img`
    width: 46.67px;
    height: 46.67px;
    /* margin-right: 12px; */
`;

export const Profile = styled.div`
    padding-left: 12px;
`;

export const Writer = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
`;

export const CreateAt = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #828282;
`;

export const RightWrapper = styled.div`
    padding-right: 102px;
    display: flex;
`;

export const LocationWrapper = styled.div`
    /* display: none; */
    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 376px;
        height: 72px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        font-weight: 500;
        font-size: 16px;

        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -60px;
    }
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
`;

export const Location = styled.img`
    margin-left: 20px;
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 36px;
    line-height: 52px;
    color: #000000;
    padding: 30px 102px 20px 102px;
    word-break: break-all;
`;

export const Images = styled.div``;

export const BoardImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    width: 70%;
    height: 70%;
    object-fit: contain;
`;

export const Contents = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 23.17px;
    padding: 50px 102px 63.7px 102px;
`;

export const Youtube = styled(ReactPlayer)`
    margin: auto;
`;

export const LikeWrapper = styled.div`
    display: flex;
`;

export const Like = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const DisLike = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const CountWrapper = styled.div`
    display: flex;
`;

export const LikeCount = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    padding-left: 10px;
    color: #ffd600;
`;

export const DisLikeCount = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    padding-left: 10px;
    color: #828282;
`;

export const ThumbUp = styled.div`
    padding-right: 40px;
`;
export const ThumbDown = styled.div``;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
    width: 90%;

    button {
        cursor: pointer;
        width: 179px;
        height: 52px;
        background: #ffffff;
        border: 1px solid #bdbdbd;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        color: #000000;
        margin: 44px 0 50px 0;
    }
`;
