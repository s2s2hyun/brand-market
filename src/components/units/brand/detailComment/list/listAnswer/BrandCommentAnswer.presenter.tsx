import { v4 as uuidv4 } from "uuid";
import CommentAnswerListUIItem from "./BrandCommentAnswer.presenteritem";
import { ICommentAnswerListUIProps } from "./BrandCommentAnswer.types";

export default function CommentAnswerListUI(props: ICommentAnswerListUIProps) {
    return (
        <>
            {props.data?.fetchUseditemQuestionAnswers.map((el) => (
                <CommentAnswerListUIItem key={uuidv4()} el={el} />
            ))}
        </>
    );
}
