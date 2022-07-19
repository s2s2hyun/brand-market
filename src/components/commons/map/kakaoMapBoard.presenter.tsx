import styled from "@emotion/styled";

const BlockLo = styled.div`
    display: flex;
`;
const MapBox = styled.div`
    margin-right: 15px;
    margin-left: 100px;
`;

export default function KakaoMapPageBoardUI(props: { width: number; height: number }) {
    return (
        <BlockLo>
            <MapBox
                id="map"
                style={{ width: `${props.width}px`, height: `${props.height}px` }}
            ></MapBox>
        </BlockLo>
    );
}
