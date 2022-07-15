import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import BoardCommentListUIItem from "./boardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./boardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
    if (!props.data) return <div />;
    return (
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
            {props.data?.fetchBoardComments.map((el) => (
                <BoardCommentListUIItem key={uuidv4()} el={el} />
            ))}
        </InfiniteScroll>
    );
}
