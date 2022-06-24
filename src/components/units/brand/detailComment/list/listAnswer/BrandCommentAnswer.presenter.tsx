import { v4 as uuidv4 } from "uuid";
import CommentAnswerListUIItem from "./BrandCommentAnswer.presenteritem";
import { ICommentAnswerListUIProps } from "./BrandCommentAnswer.types";
import * as S from "./BrandCommentAnswer.styles";

export default function CommentAnswerListUI(props: ICommentAnswerListUIProps) {
    if (!props.data) return <div />;
    console.log(props.data, "프롭데이타");
    return (
        <S.Answer>
            {props.data?.fetchUseditemQuestionAnswers.map((el) => (
                <CommentAnswerListUIItem key={uuidv4()} el={el} commentId={props.commentId} />
            ))}
        </S.Answer>
    );
}
