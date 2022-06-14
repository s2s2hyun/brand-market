import * as S from "./BrandListBest.styles";
import { IBrandListBestUIProps } from "./BrandListBest.types";

export default function BrandListBestUI(props: IBrandListBestUIProps) {
    return (
        <S.Wrapper>
            <S.BestWrapper>
                <S.Best>BEST</S.Best>
                <S.BestList>
                    {props.data?.fetchUseditemsOfTheBest.map((el) => (
                        <S.ItemBestWrapper key={el._id} id={el._id}>
                            <S.BestPicture
                                src={
                                    el.images?.length > 0 && el.images[0] !== ""
                                        ? `https://storage.googleapis.com/${el.images[0]}`
                                        : `/images/dingCoLogo.png`
                                }
                            />
                            {/* <img src={`https://storage.googleapis.com/${el.images[0]}`} /> */}
                            <S.BestName>{el.name}</S.BestName>
                            <S.BestPrice>{el.price}</S.BestPrice>
                        </S.ItemBestWrapper>
                    ))}
                </S.BestList>
            </S.BestWrapper>
        </S.Wrapper>
    );
}
