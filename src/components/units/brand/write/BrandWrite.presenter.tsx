import dynamic from "next/dynamic";
import * as S from "./BrandWrite.styles";
import "react-quill/dist/quill.snow.css";
import KakaoMapPage from "../../../commons/map/kakaoMap.container";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/upload1/Upload01.container";
import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/errorAlert";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { IBrandWriteUIProps } from "./BrandWrite.types";

// import { IBrandWriteUIProps } from "./BrandWrite.types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function BrandWriteUI(props: IBrandWriteUIProps) {
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
                <S.WriteForm
                    onSubmit={props.handleSubmit(
                        props.isEdit
                            ? (props.onClickUpdate as unknown as () => void)
                            : (props.onClickSubmit as unknown as () => void)
                    )}
                >
                    <S.TopWrapper>
                        <S.BrandTitle>{props.isEdit ? "상품 수정" : "상품 등록"}</S.BrandTitle>
                    </S.TopWrapper>
                    <S.DivderLine />
                    <S.BrandNameWarpper>
                        <S.Name>상품명</S.Name>
                        <S.BrandInput
                            type="text"
                            {...props.register("name")}
                            placeholder="상품명을 입력해주세요"
                        ></S.BrandInput>
                    </S.BrandNameWarpper>
                    <S.BrandDivderLine />
                    <S.BrandRemarkWrapper>
                        <S.Remark>상품요약</S.Remark>
                        <S.BrandInput
                            type="text"
                            {...props.register("remarks")}
                            placeholder="상품을 요약 해주세요"
                        ></S.BrandInput>
                    </S.BrandRemarkWrapper>
                    <S.BrandDivderLine />
                    <S.BrandContentsWrapper>
                        <S.Contents>상품내용</S.Contents>
                        <ReactQuill
                            style={{
                                width: "100%",
                                height: "431px",
                                marginTop: "28px",
                                marginBottom: "70px",
                            }}
                            onChange={props.onChangeContents}
                            placeholder="상품을 설명해주세요"
                            value={props.getValues("contents") || ""}
                        />
                    </S.BrandContentsWrapper>
                    <S.BrandDivderLine />
                    <S.BrandPriceWrapper>
                        <S.Price>판매가격</S.Price>
                        <S.BrandInput
                            type="number"
                            {...props.register("price")}
                            placeholder="판매가격을 입력해주세요"
                        ></S.BrandInput>
                    </S.BrandPriceWrapper>
                    <S.BrandDivderLine />
                    <S.BrandTagWrapper>
                        <S.Tag>태그입력</S.Tag>
                        <S.BrandTagInnerWrapper>
                            <S.BrandTags>
                                {props.hashArr.map((el, idx) => (
                                    <>
                                        <span key={idx}>{el}</span>

                                        <button type="button" onClick={props.onClickDeleteHash(el)}>
                                            X
                                        </button>
                                    </>
                                ))}
                            </S.BrandTags>{" "}
                            <S.BrandInput
                                type="text"
                                placeholder="#태그 #태그 #태그"
                                onKeyUp={props.onKeyUpHash}
                            ></S.BrandInput>
                        </S.BrandTagInnerWrapper>
                    </S.BrandTagWrapper>
                    <S.BrandDivderLine />
                    <S.BrandMap>브랜드 위치</S.BrandMap>
                    <S.MapWrapper>
                        {console.log(props.data?.fetchUseditem?.useditemAddress.address)}
                        <KakaoMapPage
                            address={props.address || props.data?.useditemAddress.address || ""}
                            width={384}
                            height={252}
                        />
                        <S.MapInputWarpper>
                            <S.SearchWrapper>
                                <S.Zipcode
                                    id="zipcode"
                                    name="address"
                                    placeholder="07250"
                                    readOnly
                                    value={
                                        props.zipcode || props.data?.useditemAddress.zipcode || ""
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
                                        <DaumPostcode onComplete={props.handleComplete} />
                                    </Modal>
                                )}
                            </S.SearchWrapper>
                            <S.MapInput
                                id="address"
                                readOnly
                                value={props.address || props.data?.useditemAddress.address || ""}
                            />
                            <S.Input
                                id="addressDetail"
                                type="text"
                                placeholder="상세주소를 입력해주세요."
                                {...props.register("detailAddress")}
                            />
                        </S.MapInputWarpper>
                    </S.MapWrapper>
                    <S.BrandDivderLine />
                    <S.BrandPhoto>사진첨부</S.BrandPhoto>
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
                    <S.DivderLine />
                    <S.ButtonWrapper>
                        <S.CancleButton type="button">취소</S.CancleButton>
                        <S.SubmitButton title="submit" type="submit">
                            {props.isEdit ? "수정" : "등록"}
                        </S.SubmitButton>
                    </S.ButtonWrapper>
                </S.WriteForm>
            </S.Wrapper>
        </>
    );
}
