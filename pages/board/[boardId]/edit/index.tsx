import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/boardWrite.container";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            writer
            title
            contents
            images
            boardAddress {
                zipcode
                address
                addressDetail
            }
            youtubeUrl
        }
    }
`;

export default function BoardsEditPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    return <BoardWrite isEdit={true} data={data} />;
}
