import InfiniteScroll from "react-infinite-scroller";
import * as S from "./BrandList.styles";
import { IBrandListUIProps } from "./BrandList.types";
import BrandListBest from "./listBest/BrandListBest.container";

export default function BrandListUI(props: IBrandListUIProps) {
    return (
        <S.Wrapper>
            <BrandListBest />
            <S.TopWrapper>
                <S.BrandWrite>상품등록</S.BrandWrite>
                <S.SearchWrapper>
                    <S.Search></S.Search>
                    <S.Lense src="/images/Icon@2x.png" />
                </S.SearchWrapper>
            </S.TopWrapper>
            <S.Divider />
            <S.ListWrapper>
                <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
                    <S.MainList style={{ display: "flex", flexWrap: "wrap" }}>
                        {props.data?.fetchUseditems.map((el) => (
                            <S.ItemWrapper key={el._id} id={el._id}>
                                <S.Picture
                                    src={
                                        el.images?.length > 0 && el.images[0] !== ""
                                            ? `https://storage.googleapis.com/${el.images[0]}`
                                            : `/images/dingCoLogo.png`
                                    }
                                />
                                {/* <img src={`https://storage.googleapis.com/${el.images[0]}`} /> */}
                                <S.Name>{el.name}</S.Name>
                                <S.Price>{el.price}</S.Price>
                            </S.ItemWrapper>
                        ))}
                    </S.MainList>
                </InfiniteScroll>
            </S.ListWrapper>
        </S.Wrapper>
    );
}
