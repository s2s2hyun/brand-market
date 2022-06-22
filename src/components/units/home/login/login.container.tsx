import LoginUI from "./login.presenter";
import * as yup from "yup";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_USER } from "./login.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { MutationLoginUserArgs } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

const schema = yup
    .object({
        email: yup
            .string()
            .email("이메일 아이디를 @까지 정확하게 입력해주세요 .")
            .required("이메일은 필수 입력 !!"),
        password: yup
            .string()
            .max(16, "영문+숫자조합 8~16자리의 비밀번호 입력해주세요.")
            .required("비밀번호는 필수입력 사항입니다."),
    })
    .required();

export default function LoginContainer() {
    const router = useRouter();
    const [, setAccessToken] = useRecoilState(accessTokenState);
    const [login] = useMutation(LOGIN_USER);
    const { register, handleSubmit, formState } = useForm<FieldValues>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

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
    const onClickRoutingModal = () => {
        setAlertModal(false);
        router.push("/");
    };

    const onClickLogin = async (data: MutationLoginUserArgs) => {
        try {
            const result = await login({
                variables: {
                    email: data.email,
                    password: data.password,
                },
            });
            const accessToken = result.data.loginUser.accessToken;
            setAccessToken(accessToken);
            setModalContents("로그인 완료");
            setAlertModal(true);
            setGo(true);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    return (
        <LoginUI
            formState={formState}
            register={register}
            handleSubmit={handleSubmit}
            onClickLogin={onClickLogin}
            onClickExitAlertModal={onClickExitAlertModal}
            alertModal={alertModal}
            modalContents={modalContents}
            onClickExitErrorModal={onClickExitErrorModal}
            errorAlertModal={errorAlertModal}
            go={go}
            onClickconfirmModal={onClickconfirmModal}
            onClickRoutingModal={onClickRoutingModal}
        />
    );
}
