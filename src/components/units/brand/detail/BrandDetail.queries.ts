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

// 업데이트

export const UPDATE_PRODUCT_ITEM = gql`
    mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
        updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
            tags
            images
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

// 구매하기

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
    mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
        createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
            _id
            name
            remarks
            contents
            price
            tags
            images
            buyer {
                _id
                userPoint {
                    _id
                    amount
                    user {
                        _id
                        email
                        name
                        userPoint {
                            _id
                            amount
                        }
                    }
                }
            }
            seller {
                _id
                name
                userPoint {
                    _id
                }
            }
        }
    }
`;
