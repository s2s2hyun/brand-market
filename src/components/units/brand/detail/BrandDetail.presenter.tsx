import * as S from "./BrandDetail.styles";
import { IBrandDetailUI } from "./BrandDetail.types";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import { useState } from "react";
import DOMPurify from "dompurify";
import BrandCommentWrite from "../detailComment/write/BrandCommnetWirte.container";
import BrandCommentList from "../detailComment/list/BrandCommnetList.container";
import KakaoMapPage from "../../../commons/map/kakaoMap.container";
import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/errorAlert";
import { useAuth } from "../../../commons/hocs/useAuth";

export default function BrandDetailUI(props: IBrandDetailUI) {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    // const onClickPicked = () => {
    //     setIsPicked((prev) => !prev);
    // };
    useAuth();
    return (
        <>
            {props.alertModal && (
                <Alert
                    onClickExit={
                        props.go ? props.onClickRoutingBrandModal : props.onClickconfirmModal
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
                {isOpen && (
                    <Modal
                        visible={true}
                        onOk={props.onClickUsedItemDelete}
                        onCancel={onToggleModal}
                    >
                        비밀번호 입력:{" "}
                        <input type="password" maxLength={20} onChange={props.onChangePassword} />
                    </Modal>
                )}
                <S.TopWrapper>
                    <S.LeftTopWrapper>
                        <S.ImageWrapper>
                            <S.ImageTop
                                src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images?.[0]}`}
                            ></S.ImageTop>
                        </S.ImageWrapper>
                    </S.LeftTopWrapper>
                    <S.RightTopWrapper>
                        <div>
                            <S.AVANDRESS>{props.data?.fetchUseditem?.seller?.name}</S.AVANDRESS>
                            <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
                        </div>
                        <S.PriceHeart>
                            <S.PriceLine>
                                <S.Price>판매가</S.Price>
                                <S.ProductPrice>
                                    {props.data?.fetchUseditem?.price
                                        ?.toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    원
                                </S.ProductPrice>
                            </S.PriceLine>
                            <S.HeartLine>
                                <S.MyHeart>My</S.MyHeart>
                                <S.Zzim
                                    onClick={props.onClickPick}
                                    src={"/images/heart.svg"}
                                    className={props.isPicked ? "isActive" : ""}
                                ></S.Zzim>
                                <S.Heart>Product</S.Heart>
                            </S.HeartLine>
                        </S.PriceHeart>
                        <S.Divider />
                        <S.Remark>{props.data?.fetchUseditem?.remarks}</S.Remark>
                        <S.Tags>
                            <S.BrandTags>
                                {props.data?.fetchUseditem?.tags?.map((e: any) => (
                                    <S.ProductHashTag key={uuidv4()}>{e} </S.ProductHashTag>
                                ))}
                            </S.BrandTags>
                        </S.Tags>
                        <S.SubDivider />
                        <S.ButtonWrapper>
                            <S.BuyShopWrapper>
                                <S.BuyButton type="button" onClick={props.onClickBuyBrand}>
                                    BUY NOW
                                </S.BuyButton>
                                <S.ShoppingBag
                                    type="button"
                                    onClick={props.onClickBasket(props.data)}
                                >
                                    SHOPPING BAG
                                </S.ShoppingBag>
                            </S.BuyShopWrapper>
                            {props.isMy && (
                                <S.IsMyButton>
                                    <S.DelteButton type="button" onClick={onToggleModal}>
                                        DELETE
                                    </S.DelteButton>
                                    <S.Retouch type="button" onClick={props.onClickBrandEdit}>
                                        RETOUCH
                                    </S.Retouch>
                                </S.IsMyButton>
                            )}
                        </S.ButtonWrapper>
                    </S.RightTopWrapper>
                </S.TopWrapper>
                <S.Detail>DETAIL</S.Detail>
                <S.ThreeDivider />
                <S.BottomWrapper>
                    <S.ImageBottomWrapper>
                        {props.data?.fetchUseditem?.images
                            ?.filter((el: string) => el)
                            .map((el: string) => (
                                <S.BottomImage key={el}>
                                    <S.Image src={`https://storage.googleapis.com/${el}`} />
                                </S.BottomImage>
                            ))}
                    </S.ImageBottomWrapper>
                    <S.DeliveryWrapper>
                        <S.ContentsWrapper>
                            <S.ContentsTitle>브랜드 내용</S.ContentsTitle>
                            <S.Contents>
                                {typeof window !== "undefined" ? (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                props.data?.fetchUseditem?.contents ?? "로딩중"
                                            ),
                                        }}
                                    ></p>
                                ) : (
                                    <div></div>
                                )}
                            </S.Contents>
                        </S.ContentsWrapper>

                        <S.DeliveryNote>배송/교환/반품/AS 관련 유의사항</S.DeliveryNote>
                        <S.DeliveryNoteContent>
                            상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
                            안내사항보다 우선 적용됩니다.
                        </S.DeliveryNoteContent>
                        <S.DeliveryNoteWrapper>
                            <KakaoMapPage
                                address={props.data?.fetchUseditem?.useditemAddress?.address}
                                // width={1440}
                                // height={791}
                                marginleft={0}
                            />
                            <p>
                                <ul>
                                    <li>
                                        상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이
                                        달라집니다.
                                    </li>
                                    <li>
                                        상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및
                                        휴일은 배송이 불가합니다.
                                    </li>
                                    <li>
                                        <b>
                                            상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한
                                            교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다.
                                            (전자상거래 등에서의 소비자보호에 관한 법률 제18조(청약
                                            철회 등) 9항에 의거 소비자의 사정에 의한 청약 철회 시
                                            택배비는 소비자 부담입니다.)
                                        </b>
                                    </li>
                                    <li>
                                        주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도
                                        있는 점 양해 부탁드립니다.
                                    </li>
                                    <li>
                                        반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에
                                        접수하여 주십시오.
                                    </li>
                                    <li>
                                        제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서,
                                        상품 부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나
                                        내부 포장재를 훼손 또는 분실한 경우(단, 제품확인을 위한 개봉
                                        제외) 반품/교환이 불가합니다.
                                    </li>
                                    <li>
                                        A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련
                                        문의는 에이블리 고객센터를 통해 부탁드립니다.
                                    </li>
                                    <li>
                                        상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상
                                        등에 관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에
                                        따라 받으실 수 있습니다.
                                    </li>
                                </ul>
                            </p>
                        </S.DeliveryNoteWrapper>
                    </S.DeliveryWrapper>
                </S.BottomWrapper>
                <BrandCommentWrite />
                <BrandCommentList />
            </S.Wrapper>
        </>
    );
}
