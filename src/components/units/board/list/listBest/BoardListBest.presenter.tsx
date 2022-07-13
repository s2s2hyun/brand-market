import { IBoardListBestUIProps } from "./BoardListBest.types";
import * as S from "./BoardListBest.styles";
import { getDate } from "../../../../../commons/utils";
const PREFIX_IMAGE_URL = "https://storage.googleapis.com";
export default function BoardListBestUI(props: IBoardListBestUIProps) {
    return (
        <S.Wrapper>
            <S.BoardBest>
                <div>베스트 게시글</div>
            </S.BoardBest>
            <S.BoardBestList>
                {props.data?.fetchBoardsOfTheBest.map((el: any) => (
                    <S.BoardBestWrapper
                        key={el._id}
                        id={el._id}
                        onClick={props.onClickMoveToBoardDetail}
                    >
                        <S.BestPicture
                            src={
                                el.images[0]
                                    ? `${PREFIX_IMAGE_URL}/${el.images?.[0]}`
                                    : `/images/dingcologoman.png`
                            }
                        />
                        <S.BestBox>
                            <S.BestTitle>{el.title}</S.BestTitle>
                            <S.BoxWrapper>
                                <S.ProfileBox>
                                    <S.Profile src={`/images/humanman.png`} />
                                    <S.ProfileName>{el.writer}</S.ProfileName>
                                </S.ProfileBox>
                                <S.LikeBox>
                                    <S.LikeThumb src={`/images/thumbup.png`} />
                                    <S.LikeCount>{el.likeCount}</S.LikeCount>
                                </S.LikeBox>
                            </S.BoxWrapper>
                            <S.CreateAt>Date : {getDate(el.createdAt)}</S.CreateAt>
                        </S.BestBox>
                    </S.BoardBestWrapper>
                ))}
            </S.BoardBestList>
        </S.Wrapper>
    );
}
