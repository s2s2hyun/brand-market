import styled from "@emotion/styled";
import { Rate } from "antd";

// export const Wrapper = styled.div`
//     margin-top: 100px;
//     border-bottom: 1px solid red;
// `;

export const ItemWrapper = styled.div`
    width: 1200px;
    margin-top: 100px;
    border-bottom: 1px solid #bdbdbd;
`;

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Photo = styled.img``;

export const CommentMain = styled.div`
    width: 100%;
    padding-left: 10px;
`;

export const UserRate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserWriter = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: #000000;
`;

export const Star = styled(Rate)`
    padding-left: 20px;
`;

export const Contents = styled.div`
    padding-top: 14px;
    font-weight: 500;
    font-size: 16px;
    color: #4f4f4f;
`;

export const OptionWrapper = styled.div`
    display: flex;
`;

export const Retouch = styled.img`
    width: 24px;
    height: 24px;
`;

export const Delete = styled.img`
    width: 24px;
    height: 24px;
`;

export const CreateAt = styled.div`
    font-weight: 400;
    font-size: 13px;
    color: #bdbdbd;
    /* padding-top: 15px;
    padding-left: 50px;
    padding-bottom: 25px; */
    padding: 15px 0 25px 50px;
`;

export const Divider = styled.div`
    width: 1200px;
    height: 1px;
    border: 1px solid #bdbdbd;
`;

export const PasswordInput = styled.input`
    width: 450px;
    height: 45px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 10px;
`;
export const ModalContents = styled.div`
    padding: 20px 0;
`;
