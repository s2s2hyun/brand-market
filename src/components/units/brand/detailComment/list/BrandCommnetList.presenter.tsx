import InfiniteScroll from "react-infinite-scroller";
import BrandCommentListUIItem from "./BrandCommnetList.presenterItem";
import { IBrandCommentListUIProps } from "./BrandCommnetList.tpyes";

export default function BrandCommentListUI(props: IBrandCommentListUIProps) {
    if (!props.data) return <div />;
    return (
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
            {props.data?.fetchUseditemQuestions.map((el) => (
                <BrandCommentListUIItem key={el._id} el={el} />
            ))}
        </InfiniteScroll>
    );
}
