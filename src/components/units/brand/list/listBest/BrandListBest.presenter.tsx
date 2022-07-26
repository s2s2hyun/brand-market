import { IUseditem } from "../../../../../commons/types/generated/types";
import * as S from "./BrandListBest.styles";
import { IBrandListBestUIProps } from "./BrandListBest.types";
const PREFIX_IMAGE_URL = "https://storage.googleapis.com";
export default function BrandListBestUI(props: IBrandListBestUIProps) {
    return (
        <S.Wrapper>
            <S.BestWrapper>
                <S.Best>BEST</S.Best>
                <S.BestList>
                    {console.log(props.data?.fetchUseditemsOfTheBest)}
                    {props.data?.fetchUseditemsOfTheBest.map((el: IUseditem) => (
                        <S.ItemBestWrapper
                            key={el._id}
                            id={el._id}
                            onClick={props.onClickMoveToBrandDetail}
                        >
                            <S.BestPicture
                                src={
                                    el.images?.length === 0 || el.images?.[0] === ""
                                        ? `/images/dingCoLogo.png`
                                        : `${PREFIX_IMAGE_URL}/${el.images?.[0]}`
                                }
                            />
                            {/* <img src={`https://storage.googleapis.com/${el.images[0]}`} /> */}

                            <S.SellerProduct>
                                <S.BestTag>{el.tags?.[0] || "대표태그"}</S.BestTag>
                                <S.BestPrice>
                                    {el.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                                </S.BestPrice>
                            </S.SellerProduct>
                            <S.BestName>{el.name || "조이조이"}</S.BestName>
                            <S.BestRemark>
                                {el.remarks || "[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col"}
                            </S.BestRemark>
                        </S.ItemBestWrapper>
                    ))}
                </S.BestList>
            </S.BestWrapper>
        </S.Wrapper>
    );
}
