import { gql } from "@apollo/client";

export const FETCH_BOARD_OFTHEBEST = gql`
    query fetchBoardsOfTheBest {
        fetchBoardsOfTheBest {
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            images
            boardAddress {
                _id
                zipcode
                address
                addressDetail
            }
            user
            createdAt
        }
    }
`;
