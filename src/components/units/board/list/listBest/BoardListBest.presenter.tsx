import { IBoardListBestUIProps } from "./BoardListBest.types";
import * as S from "./BoardListBest.styles";
import { Board } from "../../../../../commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
const PREFIX_IMAGE_URL = "https://storage.googleapis.com";
export default function BoardListBestUI(props: IBoardListBestUIProps) {
    return (
        <S.Wrapper>
            <S.BoardBest>
                <div>베스트 게시글</div>
            </S.BoardBest>
            <S.BoardBestList>
                {props.data?.fetchBoardsOfTheBest.map((el: Board) => (
                    <S.BoardBestWrapper
                        key={uuidv4()}
                        id={el._id}
                        onClick={props.onClickMoveToBoardDetail}
                    >
                        <S.BestPicture
                            src={
                                el.images?.length === 0 || el.images?.[0] === ""
                                    ? `/images/dingCoLogo.png`
                                    : `${PREFIX_IMAGE_URL}/${el.images?.[0]}`
                            }
                        />
                    </S.BoardBestWrapper>
                ))}
            </S.BoardBestList>
        </S.Wrapper>
    );
}
