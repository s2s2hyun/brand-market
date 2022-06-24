import InfiniteScroll from "react-infinite-scroller";
import HomeCarousel from "./homeCarousel/homeCarousel.container";
import * as S from "./homeMain.styles";
import { IHomeMainUIProps } from "./homeMain.types";
const PREFIX_IMAGE_URL = "https://storage.googleapis.com";
export default function HomeMainUI(props: IHomeMainUIProps) {
    return (
        <S.Wrapper>
            <HomeCarousel />
            <S.ListWrapper>
                <S.NewArrival>New Arrival</S.NewArrival>
                <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
                    <S.MainList
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >
                        {props.data?.fetchUseditems.map((el) => (
                            <S.ItemWrapper
                                key={el._id}
                                id={el._id}
                                onClick={props.onClickMoveToBrandDetail}
                            >
                                <S.Picture
                                    src={
                                        el.images?.length > 0 && el.images?.[0] !== ""
                                            ? `https://storage.googleapis.com/${el.images?.[0]}`
                                            : `/images/dingCoLogo.png`
                                    }
                                />
                                {/* <img src={`https://storage.googleapis.com/${el.images[0]}`} /> */}

                                <S.SellerProduct>
                                    <S.BestTag>{el.tags?.[0] || "대표태그"}</S.BestTag>
                                    <S.Price>
                                        {el.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        원
                                    </S.Price>
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
