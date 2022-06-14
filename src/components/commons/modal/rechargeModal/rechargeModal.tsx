import { useEffect, useState } from "react";
// import Head from 'next/head';
import router, { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import * as S from "./rechageStyles";
import { CREATE_RECHARGE, FETCH_LOGIN_USER } from "./rechageModal.queries";
import { accessTokenState } from "../../../../commons/store/index";
import { useRecoilState } from "recoil";
import Modal from "antd/lib/modal/Modal";

declare const window: typeof globalThis & {
    IMP: any;
};

export default function RechargeModal(props: any) {
    const router = useRouter();

    const [, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [, setErrorAlertModal] = useState(false);

    const [createRecharge] = useMutation(CREATE_RECHARGE);
    const [amount, setAmount] = useState(100);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    useEffect(() => {
        const jqueryScript = document.createElement("script");
        jqueryScript.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        document.head.appendChild(jqueryScript);

        const iamportScript = document.createElement("script");
        iamportScript.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
        document.head.appendChild(iamportScript);
    }, []);

    const requestPay = () => {
        // IMP.request_pay(param, callback) 결제창 호출
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp49910675"); // Example: imp00000000 가맹점 식별코드
        IMP.request_pay(
            {
                // param
                pg: "html5_inicis",
                pay_method: "card",
                // merchant_uid: 'ORD20180131-0000011',
                name: "아이스 아메리카노",
                amount: amount,
                buyer_email: "yoonhiwssq@naver.com",
                buyer_name: "정상수",
                buyer_tel: "010-4242-4242",
                buyer_addr: "서울특별시 숭실대입구역 커몬",
                buyer_postcode: "01181",
                // m_redirect_url: 'http://localhost:3000/usedmarket',
            },
            async (rsp: any) => {
                // callback
                if (rsp.success) {
                    // 결제 성공 시 로직,
                    const response = await createRecharge({
                        variables: {
                            impUid: rsp.imp_uid,
                        },
                        refetchQueries: [
                            {
                                query: FETCH_LOGIN_USER,
                                context: {
                                    headers: {
                                        Authorization: `Bearer ${accessToken}`,
                                    },
                                },
                            },
                        ],
                    });
                    setModalContents("결제에 성공했습니다.");
                    setAlertModal(true);
                    router.push("/");
                } else {
                    // 결제 실패 시 로직,
                    alert("결제에 실패했습니다. 다시 시도해 주세요");
                }
            }
        );
    };

    const onChangeRecharge = (event) => {
        setAmount(event.target.value);
    };
    return (
        <>
            <S.Wrapper>
                <S.Title>충전하실 금액을 선택해주세요!</S.Title>
                <S.Select name="recharge" onChange={onChangeRecharge}>
                    <S.Option disabled selected>
                        포인트 선택
                    </S.Option>
                    <S.Option value={100}>100</S.Option>
                    <S.Option value={500}>500</S.Option>
                    <S.Option value={2000}>2000</S.Option>
                    <S.Option value={5000}>5000</S.Option>
                </S.Select>
                <S.Button onClick={requestPay}>충전하기</S.Button>
            </S.Wrapper>
        </>
    );
}
