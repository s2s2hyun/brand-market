import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
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

    const onClickDelete = async () => {
        try {
            await deleteProduct({
                variables: {
                    useditemId: router?.query.brandId,
                },
            });
            alert("상품이 정상적으로 삭제되었습니다");
            router.push("/brand");
        } catch (error: any) {
            alert(error.message);
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
            alert(error.message);
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
            alert(error.message);
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
        />
    );
}
