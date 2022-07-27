import DOMPurify from "dompurify";
import { getDate } from "../../../../commons/utils";
import BoardCommentList from "./boardComment/list/boardCommentList.container";
import BoardCommentWrite from "./boardComment/write/boardCommentWrite.container";
import * as S from "./boardDetail.styles";
import { IBoardDetailUIProps } from "./boardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
    return (
        <S.Wrapper>
            <S.DetailWrapper>
                <S.TopWrapper>
                    <S.LeftWrapper>
                        <S.Photo src="/images/people.svg" />
                        <S.Profile>
                            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
                            <S.CreateAt>
                                Date:{getDate(props.data?.fetchBoard.createdAt)}
                            </S.CreateAt>
                        </S.Profile>
                    </S.LeftWrapper>
                    <S.RightWrapper>
                        <S.LocationWrapper>
                            <div className="tooltip">
                                <span className="tooltiptext">
                                    {`${props.data?.fetchBoard.boardAddress?.address}
                    ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
                                </span>
                                <S.Location src="/images/location.png" />
                            </div>
                        </S.LocationWrapper>
                    </S.RightWrapper>
                </S.TopWrapper>
                <S.Divider />
                <S.Title>{props.data?.fetchBoard.title}</S.Title>
                <S.Images>
                    {props.data?.fetchBoard.images
                        ?.filter((el: string) => el)
                        .map((el: string) => (
                            <div key={el}>
                                <S.Image src={`https://storage.googleapis.com/${el}`} />
                            </div>
                        ))}
                </S.Images>
                <S.Contents>
                    {typeof window !== "undefined" ? (
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    props.data?.fetchBoard?.contents ?? "로딩중"
                                ),
                            }}
                        ></p>
                    ) : (
                        <div></div>
                    )}
                </S.Contents>
                {props.data?.fetchBoard.youtubeUrl && (
                    <S.Youtube
                        url={props.data?.fetchBoard.youtubeUrl}
                        width="876px"
                        height="432.59px"
                    />
                )}
                <S.LikeWrapper>
                    <S.ThumbUp>
                        <S.Like src="/images/likeman.svg" onClick={props.onClickLike}></S.Like>
                        <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
                    </S.ThumbUp>
                    <S.ThumbDown>
                        <S.DisLike
                            src="/images/dislikeman.svg"
                            onClick={props.onClickDislike}
                        ></S.DisLike>
                        <S.DisLikeCount>{props.data?.fetchBoard.dislikeCount}</S.DisLikeCount>
                    </S.ThumbDown>
                </S.LikeWrapper>
            </S.DetailWrapper>
            <S.ButtonWrapper>
                <button onClick={props.onClickMoveToBoardList}>목록으로</button>
                <button onClick={props.onClickMoveToBoardEdit}>수정하기</button>
                <button onClick={props.onClickDelete}>삭제하기</button>
            </S.ButtonWrapper>
            <BoardCommentWrite />
            <BoardCommentList />
        </S.Wrapper>
    );
}
