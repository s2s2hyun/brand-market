import { gql } from "@apollo/client";

export const CREAT_PRODUCT_ITEM = gql`
    mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
        createUseditem(createUseditemInput: $createUseditemInput) {
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
