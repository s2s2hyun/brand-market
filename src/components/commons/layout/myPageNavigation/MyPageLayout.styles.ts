import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 21%;
    /* background-color: orange; */
`;

export const Menu = styled.ul`
    li {
        list-style: none;
        .isActive {
            text-decoration: underline;
        }
    }
    & > div:first-of-type {
        font-weight: 550;
        font-size: 20px;
        color: #3c96ff;
        padding-bottom: 48.38px;
    }
`;

export const MenuName = styled.div`
    font-weight: 550;
    font-size: 16px;
    color: #848484;
    padding-bottom: 48.38px;
    cursor: pointer;
`;
