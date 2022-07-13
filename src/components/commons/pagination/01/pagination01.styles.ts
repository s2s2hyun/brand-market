import styled from "@emotion/styled";

export const Column = styled.span`
    margin: 0px 50px;
`;

interface IPageProps {
    isActive?: boolean;
}
export const Page = styled.span`
    margin: 0px 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 123.85%;
    color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
    font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
    cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;

export const Left = styled.img``;

export const Right = styled.img``;
