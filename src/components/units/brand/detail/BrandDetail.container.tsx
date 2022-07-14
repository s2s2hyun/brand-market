import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { setgroups } from "process";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { basketsState } from "../../../../commons/store";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";
import BrandDetailUI from "./BrandDetail.presenter";
import {
    DELETE_PRODUCT,
    FETCH_USEDITEM,
    FETCH_USER_LOGGED_IN,
    TOGGLE_USEDITEM_PICK,
    LOGIN_USER_FOR_DELETE,
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./BrandDetail.queries";

export default function BrandDetail() {
    const router = useRouter();
    const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
    const { data, refetch } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
        FETCH_USEDITEM,
        {
            variables: { useditemId: String(router.query.brandId) },
        }
    );
    const [createPointTransactionOfBuyingAndSelling] = useMutation(
        CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
    );
    const [deleteProduct] = useMutation(DELETE_PRODUCT);
    const [toggleUsedItemPick] = useMutation(TOGGLE_USEDITEM_PICK);
    const [loginUserForDelete] = useMutation(LOGIN_USER_FOR_DELETE);

    const [modalPassword, setModalPassword] = useState("");

    // 얼럿모달
    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [errorAlertModal, setErrorAlertModal] = useState(false);
    const [go, setGo] = useState(false);

    // basketsState
    const [globalbaskets, setGlobalBaskets] = useRecoilState(basketsState);

    const onClickExitAlertModal = () => {
        setAlertModal(false);
    };

    // 에러 모달
    const onClickExitErrorModal = () => {
        setErrorAlertModal(false);
    };

    // 확인 모달
    const onClickconfirmModal = () => {
        setAlertModal(false);
    };

    // 이동 모달
    const onClickRoutingBrandModal = () => {
        setAlertModal(false);
        router.push("/brand");
    };
    console.log(data);
    const onClickDelete = async () => {
        try {
            await deleteProduct({
                variables: {
                    useditemId: router?.query.brandId,
                },
            });
            setModalContents("상품이 정상적으로 삭제되었습니다");
            setAlertModal(true);
            setGo(true);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };
    const [isPicked, setIsPicked] = useState(false);

    const onClickPick = async () => {
        setIsPicked((prev) => !prev);
        try {
            await toggleUsedItemPick({
                variables: { useditemId: String(router.query.brandId) },
            });
            refetch();
            alert("이 상품을 찜 했어요!");
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    const onChangePassword = (event: any) => {
        setModalPassword(event?.target.value);
    };

    const onClickUsedItemDelete = async () => {
        try {
            await loginUserForDelete({
                variables: {
                    email: String(userData.fetchUserLoggedIn.email),
                    password: modalPassword,
                },
            });
            onClickDelete();
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    //  장바구니
    const onClickBasket = (el: any) => () => {
        console.log(el);

        // 1. 기존 장바구니 가져오기
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

        // 2. 이미 담겼는지 확인하기

        const temp = baskets.filter(
            (basketEl: any) => basketEl.fetchUseditem._id === el.fetchUseditem._id
        );
        if (temp.length === 1) {
            alert("이미 담은 물품입니다");
            return;
        }
        // 3. 장바구니 담기
        const { __typename, ...newEl } = el;
        baskets.push(newEl);
        localStorage.setItem("baskets", JSON.stringify(baskets));
        setGlobalBaskets(baskets.length);
    };

    // 구매하기

    const onClickBuyBrand = async () => {
        try {
            await createPointTransactionOfBuyingAndSelling({
                variables: { useritemId: router?.query.brandId },
                refetchQueries: [
                    {
                        query: FETCH_USER_LOGGED_IN,
                    },
                ],
            });
            alert("상품구매");
        } catch (error: any) {
            alert(error.message);
        }
    };

    // 수정하기

    const onClickBrandEdit = () => {
        router.push(`/brands/${router?.query.brandId}/edit`);
    };

    return (
        <BrandDetailUI
            onClickDelete={onClickDelete}
            onClickPick={onClickPick}
            data={data}
            onChangePassword={onChangePassword}
            onClickUsedItemDelete={onClickUsedItemDelete}
            isPicked={isPicked}
            onClickExitErrorModal={onClickExitErrorModal}
            onClickExitAlertModal={onClickExitAlertModal}
            alertModal={alertModal}
            modalContents={modalContents}
            errorAlertModal={errorAlertModal}
            onClickconfirmModal={onClickconfirmModal}
            onClickRoutingBrandModal={onClickRoutingBrandModal}
            go={go}
            isMy={data?.fetchUseditem?.seller?._id === userData?.fetchUserLoggedIn?._id}
            onClickBasket={onClickBasket}
            onClickBuyBrand={onClickBuyBrand}
            onClickBrandEdit={onClickBrandEdit}
        />
    );
}
