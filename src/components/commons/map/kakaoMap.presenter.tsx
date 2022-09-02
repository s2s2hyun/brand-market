import styled from "@emotion/styled";

const BlockLo = styled.div`
    display: flex;
`;
const MapBox = styled.div`
    margin-right: 30px;
    margin-left: 128px;
    margin-bottom: 37px;
    width: 1350px;
    height: 791px;
    @media (max-width: 1440px) {
        width: 1000px;
    }
    @media (max-width: 1024px) {
        width: 650px;
        height: 400px;
        margin-left: 40px;
    }
    @media (max-width: 426px) {
        width: 370px;
        height: 300px;
        margin-left: 0px;
        margin-right: 0px;
    }
    @media (max-width: 320px) {
        width: 250px;
        height: 200px;
        margin-left: 0px;
        margin-right: 0px;
    }
`;

export default function KakaoMapUI(props: { width: number; height: number }) {
    return (
        <BlockLo>
            <MapBox
                id="map"
                style={{ width: `${props.width}px`, height: `${props.height}px` }}
            ></MapBox>
        </BlockLo>
    );
}
