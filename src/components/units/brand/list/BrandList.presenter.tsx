import InfiniteScroll from "react-infinite-scroller";
import * as S from "./BrandList.styles";
import { IBrandListUIProps } from "./BrandList.types";
import BrandListBest from "./listBest/BrandListBest.container";
import { v4 as uuidv4 } from "uuid";
import { IUseditem } from "../../../../commons/types/generated/types";
import { useAuth } from "../../../commons/hocs/useAuth";

const PREFIX_IMAGE_URL = "https://storage.googleapis.com";

export default function BrandListUI(props: IBrandListUIProps) {
    useAuth();
    return (
        <S.Wrapper>
            <BrandListBest />
            <S.TopWrapper>
                <S.BrandWrite onClick={props.onClickMoveToNew}>상품등록</S.BrandWrite>
                <S.SearchWrapper>
                    <S.Search type="text" onChange={props.onChangeSearch}></S.Search>
                    <S.Lense src="/images/Icon@2x.png" />
                </S.SearchWrapper>
            </S.TopWrapper>
            <S.Divider />

            {props.data?.fetchUseditems.length !== 0 ? (
                <S.ListWrapper>
                    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
                        <S.MainList style={{ display: "flex", flexWrap: "wrap" }}>
                            {props.data?.fetchUseditems.map((el: IUseditem) => (
                                <S.ItemWrapper
                                    key={uuidv4()}
                                    id={el._id}
                                    onClick={props.onClickMoveToBrandDetail(el)}
                                >
                                    <S.Picture
                                        src={
                                            el.images?.length === 0 || el.images?.[0] === ""
                                                ? `/images/dingCoLogo.png`
                                                : `${PREFIX_IMAGE_URL}/${el.images?.[0]}`
                                        }
                                    />
                                    <S.SellerProduct>
                                        <S.BestTag>{el.tags?.[0] || "대표태그"}</S.BestTag>
                                        <S.Price>
                                            {el.price
                                                ?.toString()
                                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            원
                                        </S.Price>
                                    </S.SellerProduct>
                                    <S.Name>
                                        {el.name ||
                                            "조이조이"
                                                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                                                .split("#$%")
                                                .map((el) => (
                                                    <S.Word
                                                        key={uuidv4()}
                                                        isMatched={props.keyword === el}
                                                    >
                                                        {el}
                                                    </S.Word>
                                                ))}
                                    </S.Name>
                                    <S.Remark>
                                        {el.remarks ||
                                            "[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col"}
                                    </S.Remark>
                                </S.ItemWrapper>
                            ))}
                        </S.MainList>
                    </InfiniteScroll>
                </S.ListWrapper>
            ) : (
                <S.ListWrapper>{props.loadingMessage || "로딩중..."}</S.ListWrapper>
            )}
        </S.Wrapper>
    );
}
