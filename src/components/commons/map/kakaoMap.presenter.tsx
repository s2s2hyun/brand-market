import styled from "@emotion/styled";

const BlockLo = styled.div`
    display: flex;
`;
const MapBox = styled.div`
    width: 384px;
    height: 252px;
    margin-right: 30px;
    margin-left: 128px;
    margin-bottom: 37px;
`;

export default function KakaoMapUI(props: any) {
    return (
        <BlockLo>
            <MapBox id="map"></MapBox>
        </BlockLo>
    );
}
