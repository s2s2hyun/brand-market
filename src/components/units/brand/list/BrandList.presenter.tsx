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
                                        el.images?.length > 0 && el.images?.[0] !== ""
                                            ? `https://storage.googleapis.com/${el.images[0]}`
                                            : `/images/dingCoLogo.png`
                                    }
                                />
                                {/* <img src={`https://storage.googleapis.com/${el.images[0]}`} /> */}
                                <S.SellerProduct>
                                    <S.BestTag>{el.tags?.[0] || "대표태그"}</S.BestTag>
                                    <S.Price>{el.price}</S.Price>
                                </S.SellerProduct>
                                <S.Name>{el.name || "조이조이"}</S.Name>
                                <S.Remark>
                                    {el.remarks ||
                                        "[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col"}
                                </S.Remark>
                            </S.ItemWrapper>
                        ))}
                    </S.MainList>
                </InfiniteScroll>
            </S.ListWrapper>
        </S.Wrapper>
    );
}
