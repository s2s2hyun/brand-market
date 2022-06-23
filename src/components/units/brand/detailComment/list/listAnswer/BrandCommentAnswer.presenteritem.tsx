import * as S from "./BrandCommentAnswer.styles";
import { ICommentAnswerListUIItemProps } from "./BrandCommentAnswer.types";
import { getDate } from "../../../../../../commons/utils";

export default function CommentAnswerListUIItem(props: ICommentAnswerListUIItemProps) {
    return (
        <S.Wrapper>
            <S.AnswerCommentDivider />
            <S.AnswerCommentWrapper>
                <S.AnswerInfo>
                    <S.AnswerComment>답변</S.AnswerComment>
                    <S.AnswerCommentName>{props.el?.user.name}</S.AnswerCommentName>
                    {/* <S.AnswerCommentDelete />
                    <S.AnswerCommentUpdate /> */}
                </S.AnswerInfo>
                <S.AnswerCreateAt>{getDate(props.el?.createdAt)}</S.AnswerCreateAt>
                <S.AnswerContents>{props.el?.contents}</S.AnswerContents>
            </S.AnswerCommentWrapper>
        </S.Wrapper>
    );
}
