import dynamic from "next/dynamic";
import * as S from "./BrandWrite.styles";
import "react-quill/dist/quill.snow.css";
import KakaoMapPage from "../../../commons/map/kakaoMap.container";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/upload1/Upload01.container";

// import { IBrandWriteUIProps } from "./BrandWrite.types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function BrandWriteUI(props: any) {
    return (
        <S.Wrapper>
            <S.TopWrapper>
                <S.BrandTitle>상품 등록</S.BrandTitle>
            </S.TopWrapper>
            <S.DivderLine />
            <S.BrandNameWarpper>
                <S.Name>상품명</S.Name>
                <S.BrandInput></S.BrandInput>
            </S.BrandNameWarpper>
            <S.BrandDivderLine />
            <S.BrandRemarkWrapper>
                <S.Remark>상품요약</S.Remark>
                <S.BrandInput></S.BrandInput>
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
                />
            </S.BrandContentsWrapper>
            <S.BrandDivderLine />
            <S.BrandPriceWrapper>
                <S.Price>판매가격</S.Price>
                <S.BrandInput></S.BrandInput>
            </S.BrandPriceWrapper>
            <S.BrandDivderLine />
            <S.BrandTagWrapper>
                <S.Tag>태그입력</S.Tag>
                <S.BrandInput></S.BrandInput>
            </S.BrandTagWrapper>
            <S.BrandDivderLine />
            <S.BrandMap>브랜드 위치</S.BrandMap>
            <S.MapWrapper>
                <KakaoMapPage />
                <S.MapInputWarpper>
                    <S.SearchWrapper>
                        <S.Zipcode placeholder="07250" />
                        <S.SearchButton onClick={props.onClickAddressSearch}>
                            우편번호 검색
                        </S.SearchButton>
                    </S.SearchWrapper>
                    <S.MapInput />
                    <S.MapInput />
                </S.MapInputWarpper>
            </S.MapWrapper>
            <S.BrandDivderLine />
            <S.BrandPhoto>사진첨부</S.BrandPhoto>
            <S.ImageWrapper>
                {props.fileUrls.map((el: string, index: number) => {
                    if (index === 0)
                        return (
                            <Uploads01
                                key={uuidv4()}
                                index={index}
                                fileUrl={el}
                                onChangeFileUrls={props.onChangeFileUrls}
                            />
                        );
                    if (index !== 0 && props.fileUrls[index - 1] !== "")
                        return (
                            <Uploads01
                                key={uuidv4()}
                                index={index}
                                fileUrl={el}
                                onChangeFileUrls={props.onChangeFileUrls}
                            />
                        );
                })}
            </S.ImageWrapper>
            <S.DivderLine />
            <S.ButtonWrapper>
                <S.CancleButton>취소</S.CancleButton>
                <S.SubmitButton>등록</S.SubmitButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
}
