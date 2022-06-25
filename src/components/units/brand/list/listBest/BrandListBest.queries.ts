import { gql } from "@apollo/client";

export const FETCH_USEDITEM_OFTHEBEST = gql`
    query fetchUseditemsOfTheBest {
        fetchUseditemsOfTheBest {
            _id
            name
            remarks
            contents
            price
            tags
            images
            pickedCount
            seller {
                _id
                name
            }
            createdAt
            soldAt
        }
    }
`;
