import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;

    & > div {
        :first-of-type {
            width: 20%;
        }
        :last-of-type {
            background-color: orange;
        }
    }
`;
