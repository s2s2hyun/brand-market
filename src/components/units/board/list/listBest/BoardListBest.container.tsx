import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListBestUI from "./BoardListBest.presenter";
import { FETCH_BOARD_OFTHEBEST } from "./BoardListBest.queries";
import { MouseEvent } from "react";

export default function BoardListBest() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD_OFTHEBEST);
    const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/board/${event.currentTarget.id}`);
    };
    return <BoardListBestUI data={data} onClickMoveToBoardDetail={onClickMoveToBoardDetail} />;
}
