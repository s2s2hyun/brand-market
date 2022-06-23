import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { setgroups } from "process";
import { useState } from "react";
import { Query, QueryFetchUseditemArgs } from "../../../../commons/types/generated/types";
import BrandDetailUI from "./BrandDetail.presenter";
import {
    DELETE_PRODUCT,
    FETCH_USEDITEM,
    FETCH_USER_LOGGED_IN,
    TOGGLE_USEDITEM_PICK,
    LOGIN_USER_FOR_DELETE,
} from "./BrandDetail.queries";

export default function BrandDetail() {
    const router = useRouter();
    const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
    const { data, refetch } = useQuery<Pick<Query, "fetchUseditem">, QueryFetchUseditemArgs>(
        FETCH_USEDITEM,
        {
            variables: { useditemId: String(router.query.brandId) },
        }
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
        />
    );
}
