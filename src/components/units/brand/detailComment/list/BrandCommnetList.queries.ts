import { gql } from "@apollo/client";

export const FETCH_BRAND_COMMENTS = gql`
    query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
        fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
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

export const DELETE_BRAND_COMMENT = gql`
    mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
        deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
    }
`;

export const FETCH_BRAND_COMMENTS_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
        fetchUseditemQuestionAnswers(page: $page, useditemQuestionId: $useditemQuestionId) {
            _id
            contents
            useditemQuestion {
                _id
                contents
                useditem
                user
                createdAt
                updatedAt
            }
            user {
                _id
                email
                name
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`;
