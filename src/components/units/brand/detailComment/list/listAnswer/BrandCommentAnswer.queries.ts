import { gql } from "@apollo/client";

export const FETCH_BRAND_COMMENTS_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
        fetchUseditemQuestionAnswers(page: $page, useditemQuestionId: $useditemQuestionId) {
            _id
            contents
            user {
                _id
                name
            }
            createdAt
        }
    }
`;

export const BRAND_COMMENTS_ANSWERS_CREATE = gql`
    mutation createUseditemQuestionAnswer(
        $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
        $useditemQuestionId: ID!
    ) {
        createUseditemQuestionAnswer(
            createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
            useditemQuestionId: $useditemQuestionId
        ) {
            _id
            contents

            user
            createdAt
        }
    }
`;

export const BRAND_COMMENTS_ANSWERS_DELETE = gql`
    mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
        deleteUseditemQuestionAnswer(useditemQuestionAnswerId: $useditemQuestionAnswerId)
    }
`;

export const BRAND_COMMENTS_ANSWERS_UPDATE = gql`
    mutation updateUseditemQuestionAnswer(
        $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
        $useditemQuestionAnswerId: ID!
    ) {
        updateUseditemQuestionAnswer(
            updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
            useditemQuestionAnswerId: $useditemQuestionAnswerId
        ) {
            _id
            contents
            useditemQuestion
        }
    }
`;
