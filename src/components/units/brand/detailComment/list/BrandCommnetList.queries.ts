import { gql } from "@apollo/client";

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

export const DELETE_BRAND_COMMENT = gql`
    mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
        deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
    }
`;
