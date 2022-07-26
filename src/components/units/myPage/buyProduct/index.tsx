import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
    IQuery,
    IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "../MyPage.queries";
import * as S from "./buyProduct.styles";
const PREFIX_IMAGE_URL = "https://storage.googleapis.com";
export default function BuyProductPage() {
    const router = useRouter();
    const onClickMoveToBrandDetail = (el: any) => (event: any) => {
        router.push(`/brands/${el}`);
    };

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchPointTransactionsOfBuying">,
        IQueryFetchPointTransactionsOfBuyingArgs
    >(FETCH_POINT_TRANSACTIONS_OF_BUYING);

    return (
        <S.Wrapper>
            <S.TopWrapper>
                <S.Title>구매한 상품</S.Title>
            </S.TopWrapper>
            <S.ListWrapper>
                {data?.fetchPointTransactionsOfBuying.map((el: any) => (
                    <S.BuyList key={el._id} onClick={onClickMoveToBrandDetail}>
                        <S.Picture
                            src={
                                el.useditem.images?.length === 0 || el.useditem.images?.[0] === ""
                                    ? `/images/dingCoLogo.png`
                                    : `${PREFIX_IMAGE_URL}/${el.useditem.images?.[0]}`
                            }
                        />
                        <S.SellerProduct>
                            <S.BestTag>{el.useditem.tags?.[0] || "대표태그"}</S.BestTag>
                            <S.Price>
                                {el.useditem.price
                                    ?.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                원
                            </S.Price>
                        </S.SellerProduct>
                        <S.Name>{el.useditem.name || "조이조이"}</S.Name>
                        <S.Remark>
                            {el.useditem.remarks ||
                                "[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col"}
                        </S.Remark>
                    </S.BuyList>
                ))}
            </S.ListWrapper>
        </S.Wrapper>
    );
}
