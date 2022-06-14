import { gql } from "@apollo/client";

// 충전
export const CREATE_RECHARGE = gql`
    mutation createPointTransactionOfLoading($impUid: ID!) {
        createPointTransactionOfLoading(impUid: $impUid) {
            _id
            amount
            status
            createdAt
        }
    }
`;
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
