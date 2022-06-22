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
