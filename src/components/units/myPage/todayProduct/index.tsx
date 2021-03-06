import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { todayProductState } from "../../../../commons/store";
import * as S from "./TodayProduct.styles";
const PREFIX_IMAGE_URL = "https://storage.googleapis.com";
export default function TodayProductPage() {
    const router = useRouter();
    const [todayProduct] = useRecoilState(todayProductState);
    const onClickMoveToBrandDetail = (el: any) => (event: any) => {
        router.push(`/brands/${el}`);
    };
    console.log(todayProduct);
    return (
        <S.Wrapper>
            <S.TopWrapper>
                <S.Title>최근 본 상품</S.Title>
            </S.TopWrapper>
            <S.ListWrapper>
                {todayProduct.map((el: any) => (
                    <S.TodayList key={el._id} onClick={onClickMoveToBrandDetail}>
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
                                {el.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                            </S.Price>
                        </S.SellerProduct>
                        <S.Name>{el.name || "조이조이"}</S.Name>
                        <S.Remark>
                            {el.remarks || "[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col"}
                        </S.Remark>
                    </S.TodayList>
                ))}
            </S.ListWrapper>
        </S.Wrapper>
    );
}
