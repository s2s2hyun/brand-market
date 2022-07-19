import { IBoardWriteUIProps } from "./boardWrite.types";
import * as S from "./boardWrite.styles";
import Uploads01 from "../../../commons/uploads/upload1/Upload01.container";
import { v4 as uuidv4 } from "uuid";
import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/errorAlert";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import KakaoMapPageBoard from "../../../commons/map/kakaoMapBoard.container";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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
                        <S.BoardLine>
                            <div>{props.isEdit ? "게시글 수정" : "게시글 등록"}</div>
                            <S.InputWrapper>
                                <S.TopWrapper>
                                    <S.WriterWrapper>
                                        <div>작성자</div>
                                        <input
                                            type="text"
                                            {...props.register("writer")}
                                            placeholder="이름을 입력해주세요"
                                        ></input>
                                    </S.WriterWrapper>
                                    <S.PasswordWrapper>
                                        <div>비밀번호</div>
                                        <input
                                            type="password"
                                            {...props.register("password")}
                                            placeholder="비밀번호를 입력해주세요"
                                        ></input>
                                    </S.PasswordWrapper>
                                </S.TopWrapper>
                                <div>제목</div>
                                <S.Title>
                                    <input
                                        type="text"
                                        {...props.register("title")}
                                        placeholder="제목을 입력해주세요"
                                    ></input>
                                </S.Title>
                                <div>내용</div>
                                <S.Contents>
                                    <ReactQuill
                                        style={{
                                            width: "996px",
                                            height: "480px",
                                            marginTop: "28px",
                                            marginBottom: "70px",
                                            marginLeft: "100px",
                                        }}
                                        onChange={props.onChangeContents}
                                        placeholder="게시글 내용을 입력해주세요"
                                        value={props.getValues("contents") || ""}
                                    />
                                </S.Contents>
                                <div>주소</div>
                                <S.MapWrapper>
                                    {console.log(props.data?.fetchBoard?.boardAddress.address)}
                                    <KakaoMapPageBoard
                                        address={
                                            props.address || props.data?.boardAddress.address || ""
                                        }
                                        width={228}
                                        height={234}
                                    />
                                    <S.MapInputWarpper>
                                        <S.SearchWrapper>
                                            <S.ZipCode
                                                id="zipcode"
                                                name="address"
                                                placeholder="07250"
                                                readOnly
                                                value={
                                                    props.zipcode ||
                                                    props.data?.boardAddress.zipcode ||
                                                    ""
                                                }
                                            />
                                            <S.SearchButton type="button" onClick={props.showModal}>
                                                우편번호 검색
                                            </S.SearchButton>
                                            {/* 주소모달 */}
                                            {props.isOpen && (
                                                <Modal
                                                    title="주소를 검색해주세요"
                                                    visible={true}
                                                    onOk={props.handleOk}
                                                    onCancel={props.handleCancel}
                                                >
                                                    <DaumPostcode
                                                        onComplete={props.handleComplete}
                                                    />
                                                </Modal>
                                            )}
                                        </S.SearchWrapper>
                                        <S.MapAddress>
                                            <input
                                                id="address"
                                                readOnly
                                                value={
                                                    props.address ||
                                                    props.data?.boardAddress.address ||
                                                    ""
                                                }
                                            />
                                            <input
                                                id="addressDetail"
                                                type="text"
                                                placeholder="상세주소를 입력해주세요."
                                                {...props.register("addressDetail")}
                                            />
                                        </S.MapAddress>
                                    </S.MapInputWarpper>
                                </S.MapWrapper>
                                <div>유투브</div>
                                <S.Youtube>
                                    <input
                                        type="text"
                                        {...props.register("youtubeUrl")}
                                        placeholder="youtubeUrl 입력해주세요"
                                    ></input>
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
                                    <S.DeleteButton>삭제</S.DeleteButton>
                                    <S.CancleButton type="button">취소</S.CancleButton>
                                    <S.SubmitButton
                                        title="submit"
                                        type="submit"
                                        isActive={props.isEdit ? true : props.isActive}
                                    >
                                        {props.isEdit ? "수정" : "등록"}
                                    </S.SubmitButton>
                                </S.ButtonWrapper>
                            </S.InputWrapper>
                        </S.BoardLine>
                    </S.BoradWrapper>
                </form>
            </S.Wrapper>
        </>
    );
}
