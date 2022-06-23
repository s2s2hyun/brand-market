import { gql } from "@apollo/client";

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
            useditemQuestion {
                _id
                contents
                useditem {
                    _id
                    name
                    remarks
                }
                user
                createdAt
            }
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
