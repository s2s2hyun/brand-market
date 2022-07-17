import { IBoardWriteUIProps } from "./boardWrite.types";
import * as S from "./boardWrite.styles";
import Uploads01 from "../../../commons/uploads/upload1/Upload01.container";
import { v4 as uuidv4 } from "uuid";
import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/errorAlert";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
    return (
        <>
            {props.alertModal && (
                <Alert
                    onClickExit={
                        props.go ? props.onClickExitSubmitModal : props.onClickExitUpdateModal
                    }
                    contents={props.modalContents}
                />
            )}
            {props.errorAlertModal && (
                <ErrorAlert
                    onClickExit={props.onClickExitErrorModal}
                    contents={props.modalContents}
                />
            )}
            <S.Wrapper>
                <form
                    onSubmit={props.handleSubmit(
                        props.isEdit
                            ? (props.onClickUpdate as unknown as () => void)
                            : (props.onClickSubmit as unknown as () => void)
                    )}
                >
                    <S.BoradWrapper>
                        <div>게시물 등록</div>
                        <S.InputWrapper>
                            <S.TopWrapper>
                                <S.WriterWrapper>
                                    <div>작성자</div>
                                    <input></input>
                                </S.WriterWrapper>
                                <S.PasswordWrapper>
                                    <div>비밀번호</div>
                                    <input></input>
                                </S.PasswordWrapper>
                            </S.TopWrapper>
                            <S.Title>
                                <div>제목</div>
                                <input></input>
                            </S.Title>
                            <S.Contents>
                                <div>내용</div>
                                <input></input>
                            </S.Contents>
                            <S.MapWrapper>
                                {/* 지도  width: 228px; height: 234px;*/}
                                <S.MapIntputWrapper>
                                    <S.SearchWrapper>
                                        <S.ZipCode />
                                        <S.SearchButton>우편번호 검색</S.SearchButton>
                                    </S.SearchWrapper>
                                    <S.MapInput />
                                    <S.MapDetailInput />
                                </S.MapIntputWrapper>
                            </S.MapWrapper>
                            <S.Youtube>
                                <div>유투브</div>
                                <input></input>
                            </S.Youtube>

                            <div>사진첨부</div>
                            <S.ImageWrapper title="upload">
                                {props.fileUrls.map((el: string, index: number) => {
                                    if (index === 0)
                                        return (
                                            <S.UploadWrapper>
                                                <Uploads01
                                                    type="upload"
                                                    key={uuidv4()}
                                                    index={index}
                                                    fileUrl={el}
                                                    onChangeFileUrls={props.onChangeFileUrls}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={props.onClickImageDelete(index)}
                                                >
                                                    X
                                                </button>
                                            </S.UploadWrapper>
                                        );
                                    if (index !== 0 && props.fileUrls[index - 1] !== "")
                                        return (
                                            <S.UploadWrapper>
                                                <Uploads01
                                                    type="upload"
                                                    key={uuidv4()}
                                                    index={index}
                                                    fileUrl={el}
                                                    onChangeFileUrls={props.onChangeFileUrls}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={props.onClickImageDelete(index)}
                                                >
                                                    X
                                                </button>
                                            </S.UploadWrapper>
                                        );
                                })}
                            </S.ImageWrapper>
                            <S.ButtonWrapper>
                                <S.CancleButton type="button">취소</S.CancleButton>
                                <S.SubmitButton title="submit" type="submit">
                                    {props.isEdit ? "수정" : "등록"}
                                </S.SubmitButton>
                            </S.ButtonWrapper>
                        </S.InputWrapper>
                    </S.BoradWrapper>
                </form>
            </S.Wrapper>
        </>
    );
}
