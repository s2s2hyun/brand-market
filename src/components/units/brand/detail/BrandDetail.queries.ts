import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
    query fetchUseditem($useditemId: ID!) {
        fetchUseditem(useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
            pickedCount
            tags
            images
            seller {
                _id
                name
            }
            useditemAddress {
                lat
                lng
                zipcode
                address
                addressDetail
            }
        }
    }
`;

// 삭제하기

export const DELETE_PRODUCT = gql`
    mutation deleteUseditem($useditemId: ID!) {
        deleteUseditem(useditemId: $useditemId)
    }
`;

// ♡찜하기
export const TOGGLE_USEDITEM_PICK = gql`
    mutation toggleUseditemPick($useditemId: ID!) {
        toggleUseditemPick(useditemId: $useditemId)
    }
`;

// Login 쿼리서
export const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            name
            email
            _id
            userPoint {
                _id
                amount
            }
        }
    }
`;

// 상품삭제용 로그인
export const LOGIN_USER_FOR_DELETE = gql`
    mutation login($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`;
