import { css } from "@emotion/react";

export const globalStyles = css`
    * {
        margin: 0px;
        box-sizing: border-box;
    }

    @font-face {
        font-family: "Happiness-Sans-Title";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Title.woff2")
            format("woff2");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        src: url("/fonts/Roboto-Regular.ttf") format("truetype");
        unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    }
`;
