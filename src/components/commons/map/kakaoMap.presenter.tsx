import styled from "@emotion/styled";

const BlockLo = styled.div`
    display: flex;
`;
const MapBox = styled.div`
    margin-right: 30px;
    margin-left: 128px;
    margin-bottom: 37px;
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
