import { IBrandCommentAnswerWriteUIProps } from "./BrandCommentAnswerWrite.types";
import * as S from "./BrandCommentAnswerWrite.styles";
import Alert from "../../../../../commons/modal/alert/alert";
import ErrorAlert from "../../../../../commons/modal/errorModal/errorAlert";

export default function BrandCommentAnswerWriteUI(props: IBrandCommentAnswerWriteUIProps) {
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
                    props.isEdit
                        ? props.onClickCommentAnswerUpdate
                        : props.onClickCommentAnswerSubmit
                )}
            >
                <S.Wrapper>
                    <S.AnswerDivier />
                    <S.AnswerCommentWrite
                        placeholder="답글을 등록해주세요."
                        {...props.register("contents")}
                        maxLength={100}
                    ></S.AnswerCommentWrite>
                    <S.Error>{props.formState.errors.contents?.message}</S.Error>
                    <S.ButtonWrapper>
                        <S.CancleButton>취소하기</S.CancleButton>
                        <S.Submit title="submit" type="submit">
                            {props.isEdit ? "수정하기" : "작성하기"}
                        </S.Submit>
                    </S.ButtonWrapper>
                </S.Wrapper>
            </form>
        </>
    );
}
