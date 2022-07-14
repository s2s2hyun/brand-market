import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import BoardListBest from "./listBest/BoardListBest.container";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/utils";
import Paginations01 from "../../../commons/pagination/01/pagination01.container";
const PREFIX_IMAGE_URL = "https://storage.googleapis.com";

export default function BoardListUI(props: IBoardListUIProps) {
    const lastPage = Math.ceil(props.dataBoardsCount?.fetchBoardsCount / 10);
    console.log("lastPage", lastPage);
    return (
        <S.Wrapper>
            <BoardListBest />
            <S.TopWrapper>
                <S.BrandWrite onClick={props.onClickMoveToBoardNew}>게시글 등록</S.BrandWrite>
                <S.SearchWrapper>
                    <S.Search type="text" onChange={props.onChangeSearch}></S.Search>
                    <S.Lense src="/images/Icon@2x.png" />
                </S.SearchWrapper>
            </S.TopWrapper>
            <S.Divider />

            {props.data?.fetchBoards.map((el: any, index: number) => (
                <S.BoardListWrapper key={el._id}>
                    <S.ListWrapper>
                        <S.LeftWrapper>
                            <S.BoardPicture
                                src={
                                    el.images[0]
                                        ? `${PREFIX_IMAGE_URL}/${el.images?.[0]}`
                                        : `/images/dingcologoman.png`
                                }
                            ></S.BoardPicture>
                            <S.BoardName>
                                <S.BoardNumber>#{index + 1}</S.BoardNumber>
                                <S.BoardTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
                                    {el.title
                                        .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                                        .split("#$%")
                                        .map((el: any) => (
                                            <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                                                {el}
                                            </S.Word>
                                        ))}
                                </S.BoardTitle>
                            </S.BoardName>
                        </S.LeftWrapper>
                        <S.RightWrapper>
                            <S.ImageIn src="/images/photo.png" />
                            <S.ImageCount>{el.images.length}</S.ImageCount>
                            <S.Like src="/images/path.png" />
                            <S.LikeCount>{el.likeCount}</S.LikeCount>
                            <S.Profile src="images/face.png" />
                            <S.ProfileWrapper>
                                <S.Writer>{el.writer}</S.Writer>
                                <S.CreateAt>{getDate(el.createdAt)}</S.CreateAt>
                            </S.ProfileWrapper>
                        </S.RightWrapper>
                    </S.ListWrapper>
                </S.BoardListWrapper>
            ))}
            <S.Pagination>
                <Paginations01 lastPage={lastPage} refetch={props.refetch} />
            </S.Pagination>
        </S.Wrapper>
    );
}
