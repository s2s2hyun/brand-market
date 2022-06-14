import { gql } from "@apollo/client";

// 로그인 유저 정보
export const FETCH_LOGIN_USER = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            _id
            email
            name
            userPoint {
                _id
                amount
            }
        }
    }
`;

export const LOGOUT = gql`
    mutation logoutUser {
        logoutUser
    }
`;
