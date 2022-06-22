import * as S from "./BrandCommnetWirte.styles";
import { IBrandCommentWriteUIProps } from "./BrandCommnetWirte.types";

export default function BrandCommentWriteUI(props: IBrandCommentWriteUIProps) {
    return (
        <form
            onSubmit={props.handleSubmit(
                props.isEdit ? props.onClickCommentUpdate : props.onClickCommentSubmit
            )}
        >
            <S.Wrapper>
                <S.QnaWrapper>
                    <S.Qna>Q&A</S.Qna>
                </S.QnaWrapper>
                <S.QnaDivider />
                <S.QnaCommentWrapper>
                    <S.QnaCommentInputWrapper>
                        <S.QnaContentsInput
                            {...props.register("contents")}
                            placeholder="내용을 입력해주세요."
                        ></S.QnaContentsInput>
                        <S.QnaButton title="submit" type="submit">
                            {props.isEdit ? "수정하기" : "작성하기"}
                        </S.QnaButton>
                    </S.QnaCommentInputWrapper>
                </S.QnaCommentWrapper>
                {/* <S.SubDidvier /> */}
            </S.Wrapper>
        </form>
    );
}
