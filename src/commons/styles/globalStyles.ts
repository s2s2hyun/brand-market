import { css } from "@emotion/react";

export const globalStyles = css`
    * {
        margin: 0px;
        box-sizing: border-box;
    }

    @font-face {
        font-family: "NotoSansKR";
        font-style: normal;
        src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
        unicode-range: U+AC00-D7A3;
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        src: url("/fonts/Roboto-Regular.ttf") format("truetype");
        unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    }
`;
