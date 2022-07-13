import { gql } from "@apollo/client";

export const FETCH_BOARD_OFTHEBEST = gql`
    query fetchBoardsOfTheBest {
        fetchBoardsOfTheBest {
            _id
            writer
            title
            likeCount
            images
            createdAt
        }
    }
`;
