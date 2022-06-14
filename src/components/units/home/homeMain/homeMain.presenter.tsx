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
