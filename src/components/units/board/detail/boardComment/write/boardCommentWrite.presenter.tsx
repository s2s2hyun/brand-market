import * as S from "./boardCommentWrite.styles";

export default function BoardCommentWriteUI() {
    return (
        <S.Wrapper>
            <S.CommentTop>
                <S.Emoji src="/images/comment.svg" />
                <S.Comment>댓글</S.Comment>
            </S.CommentTop>
            <S.InputWrapper>
                <S.Writer></S.Writer>
                <S.Password></S.Password>
                <S.Star></S.Star>
            </S.InputWrapper>
        </S.Wrapper>
    );
}
