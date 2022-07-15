import Alert from "../../../../../commons/modal/alert/alert";
import ErrorAlert from "../../../../../commons/modal/errorModal/errorAlert";
import * as S from "./boardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./boardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
    return (
        <>
            {props.alertModal && (
                <Alert onClickExit={props.onClickExitAlertModal} contents={props.modalContents} />
            )}

            {props.errorAlertModal && (
                <ErrorAlert
                    onClickExit={props.onClickExitErrorModal}
                    contents={props.modalContents}
                />
            )}
            <form
                onSubmit={props.handleSubmit(
                    props.isEdit ? props.onClickUpdate : props.onClickWrite
                )}
            >
                <S.Wrapper>
                    <S.CommentTop>
                        <S.Emoji src="/images/comment.svg" />
                        <S.Comment>댓글</S.Comment>
                    </S.CommentTop>
                    <S.InputWrapper>
                        <S.Writer
                            type="writer"
                            {...props.register("writer")}
                            placeholder="작성자"
                        ></S.Writer>
                        <S.Password
                            type="password"
                            {...props.register("password")}
                            placeholder="비밀번호"
                        ></S.Password>
                        <S.Star onChange={props.onChangeStar} ref={props.ratingRef} />
                    </S.InputWrapper>
                    <S.ContentsWrapper>
                        <S.Contents
                            {...props.register("contents")}
                            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                            onChange={props.onChangeContents}
                            maxLength={100}
                        ></S.Contents>
                        <S.ContentsBottom>
                            <S.ContentMax>{props.count}/100</S.ContentMax>
                            <S.Button>{props.isEdit ? "수정" : "등록"}</S.Button>
                        </S.ContentsBottom>
                    </S.ContentsWrapper>
                </S.Wrapper>
            </form>
        </>
    );
}
