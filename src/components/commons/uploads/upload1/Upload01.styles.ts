import styled from "@emotion/styled";

export const UploadImage = styled.img`
    width: 100%;
    height: 100%;
    background: #efefef;
    object-fit: cover;
    cursor: pointer;
`;

export const UploadButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #bdbdbd;
    outline: none;
    border: none;
    cursor: pointer;
`;

export const UploadFileHidden = styled.input`
    display: none;
`;
