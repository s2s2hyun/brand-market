import InfiniteScroll from "react-infinite-scroller";
import BrandCommentListUIItem from "./BrandCommnetList.presenterItem";
import { IBrandCommentListUIProps } from "./BrandCommnetList.tpyes";
import { v4 as uuidv4 } from "uuid";
import * as S from "./BrandCommnetList.styles";
import CommentAnswerList from "./listAnswer/BrandCommentAnswer.container";
export default function BrandCommentListUI(props: IBrandCommentListUIProps) {
    if (!props.data) return <div />;

    return (
        <S.Scroll>
            <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
                {props.data?.fetchUseditemQuestions.map((el) => (
                    <BrandCommentListUIItem key={uuidv4()} el={el} isOpenDeleteModal={false} />
                ))}
            </InfiniteScroll>
        </S.Scroll>
    );
}
