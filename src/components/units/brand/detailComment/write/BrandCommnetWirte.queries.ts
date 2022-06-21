import { gql } from "@apollo/client";

export const CREATE_BRAND_COMMENT = gql`
    mutation createUseditemQuestion(
        $createUseditemQuestionInput: CreateUseditemQuestionInput!
        $useditemId: ID!
    ) {
        createUseditemQuestion(
            createUseditemQuestionInput: $createUseditemQuestionInput
            useditemId: $useditemId
        ) {
            _id
            contents
            user {
                _id
                name
            }
            useditem {
                _id
            }
            createdAt
        }
    }
`;

export const UPDATE_BRAND_COMMENT = gql`
    mutation updateUseditemQuestion(
        $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
        $useditemQuestionId: ID!
    ) {
        updateUseditemQuestion(
            updateUseditemQuestionInput: $updateUseditemQuestionInput
            useditemQuestionId: $useditemQuestionId
        ) {
            _id
        }
    }
`;

export const FETCH_BRAND_COMMENTS = gql`
    query fetchUseditemQuestions($useditemId: ID!) {
        fetchUseditemQuestions(useditemId: $useditemId) {
            _id
            contents
            createdAt
            user {
                _id
                name
                email
            }
        }
    }
`;
