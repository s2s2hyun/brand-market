import { useState } from "react";
import RechargeModal from "../../modal/rechargeModal/rechargeModal";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";
import { Modal } from "antd";

export default function HeaderUI(props: ILayoutHeaderUIProps) {
    const [isOpen, setIsOpen] = useState(false);
    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            {isOpen && (
                <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
                    <RechargeModal />
                </Modal>
            )}
            <S.Wrapper>
                <S.LogoWrapper>
                    <S.Logo
                        src="/images/dingCoLogo.png"
                        alt="logo"
                        onClick={props.onClickMain}
                    ></S.Logo>
                </S.LogoWrapper>
                <S.OptionWrapper>
                    {props.myData?.fetchUserLoggedIn.name === undefined ? (
                        <S.NoLog>
                            <S.Login onClick={props.onClickLogin}>로그인</S.Login>
                            <S.Signup onClick={props.onClickSignUp}>회원가입</S.Signup>
                        </S.NoLog>
                    ) : (
                        <S.UserInfo>
                            <S.WelcomeText>{props.myData?.fetchUserLoggedIn.name}님 </S.WelcomeText>
                            <S.Point>
                                포인트{props.myData?.fetchUserLoggedIn?.userPoint?.amount} P
                            </S.Point>
                            <S.Charge onClick={onToggleModal}>충전</S.Charge>
                            <S.LogOut onClick={props.onClickLogOut}>로그아웃</S.LogOut>
                        </S.UserInfo>
                    )}
                    <S.BasketWrapper>
                        <S.Basket onClick={props.onClickBasket}>장바구니</S.Basket>
                        <S.BasketCount>{props.baskets}</S.BasketCount>
                    </S.BasketWrapper>
                </S.OptionWrapper>
            </S.Wrapper>
        </>
    );
}
