import * as S from "./boardList.styles";
import { IBoardListUIProps } from "./boardList.types";
// import BoardListBest from "./listBest/BoardListBest.container";
const PREFIX_IMAGE_URL = "https://storage.googleapis.com";

export default function BoardListUI(props: IBoardListUIProps) {
    return (
        <S.Wrapper>
            {/* <BoardListBest /> */}
            <S.TopWrapper>
                <S.BrandWrite onClick={props.onClickMoveToBoardNew}>상품등록</S.BrandWrite>
                <S.SearchWrapper>
                    <S.Search type="text" onChange={props.onChangeSearch}></S.Search>
                    <S.Lense src="/images/Icon@2x.png" />
                </S.SearchWrapper>
            </S.TopWrapper>
            <S.Divider />

            {props.data?.fetchBoards.map((el) => (
                <S.BoardListWrapper
                    key={el._id}
                    id={el._id}
                    onClick={props.onClickMoveToBoardDetail}
                >
                    <S.BoardPicture
                        src={
                            el.images?.length === 0 || el.images?.[0] === ""
                                ? `/images/dingCoLogo.png`
                                : `${PREFIX_IMAGE_URL}/${el.images?.[0]}`
                        }
                    ></S.BoardPicture>
                </S.BoardListWrapper>
            ))}
        </S.Wrapper>
    );
}
