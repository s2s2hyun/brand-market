import DOMPurify from "dompurify";
import { getDate } from "../../../../commons/utils";
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
                        <S.Link src="/images/link.png"></S.Link>
                        <S.Location src="/images/location.png"></S.Location>
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
                        <S.Like src="/images/likeman.svg"></S.Like>
                        <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
                    </S.ThumbUp>
                    <S.ThumbDown>
                        <S.DisLike src="/images/dislikeman.svg"></S.DisLike>
                        <S.DisLikeCount>{props.data?.fetchBoard.dislikeCount}</S.DisLikeCount>
                    </S.ThumbDown>
                </S.LikeWrapper>
            </S.DetailWrapper>
            <S.ButtonWrapper>
                <button>목록으로</button>
                <button>수정하기</button>
            </S.ButtonWrapper>
            <BoardCommentWrite />
        </S.Wrapper>
    );
}
