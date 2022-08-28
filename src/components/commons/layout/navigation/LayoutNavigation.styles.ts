import styled from "@emotion/styled";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;
    background: #000000;
`;

export const Categories = styled.ul``;

export const Navi = styled.ul`
    display: flex;
`;

export const Brand = styled.li`
    padding-right: 50%;
    font-weight: 700;
    font-size: 2.2rem;
    letter-spacing: -0.05em;
    color: #ffffff;
    cursor: pointer;
    list-style: none;
    @media (max-width: 720px) {
        font-size: 20px;
        padding-right: 20px;
    }
`;

export const Board = styled.li`
    font-weight: 700;
    font-size: 2.2rem;
    letter-spacing: -0.05em;
    color: #ffffff;
    cursor: pointer;
    list-style: none;
    @media (max-width: 720px) {
        font-size: 20px;
    }
`;

// export const Mypage = styled.li`
//     padding-top: 10%;
//     padding-right: 10%;
//     font-weight: 700;
//     font-size: 2.2rem;
//     letter-spacing: -0.05em;
//     color: #ffffff;
//     cursor: pointer;
//     list-style: none;
// `;
