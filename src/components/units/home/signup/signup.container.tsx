import SignupUI from "./signup.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "./signup.types";
import { CREATE_USER } from "./signup.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { ICreateUserInput } from "../../../../commons/types/generated/types";

const schema = yup.object({
    email: yup
        .string()
        .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
        .required("이메일은 필수 입력 사항입니다."),
    password: yup
        .string()
        .matches(/^[A-Za-z0-9+]{8,16}$/, "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.")
        .required("비밀번호는 필수 입력 사항입니다."),
    name: yup
        .string()
        .min(2, "이름은 2자리 이상 입력해 주세요.")
        .max(10, "10자 이내로 입력해주세요.")
        .required("이름은 필수 입력 사항입니다."),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});

export default function SignUpContainer(_props: any) {
    const [createUser] = useMutation(CREATE_USER);
    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState<string>();
    const [errorAlertModal, setErrorAlertModal] = useState(false);
    const [go, setGo] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState } = useForm<FormValues>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const { MoveToPage } = useMoveToPage();

    // 이동 모달
    const onClickRoutingModal = () => {
        setAlertModal(false);
        router.push("/");
    };

    // 확인 모달
    const onClickconfirmModal = () => {
        setAlertModal(false);
    };

    // 에러 모달
    const onClickErrorModal = () => {
        setErrorAlertModal(false);
    };

    // 취소 => 메인
    const onClickCancle = () => {
        router.push("/");
    };

    const onClickcreateUser = async (data: ICreateUserInput) => {
        try {
            await createUser({
                variables: {
                    createUserInput: {
                        email: data.email,
                        password: data.password,
                        name: data.name,
                    },
                },
            });
            setModalContents("회원가입이 완료되었습니다.");
            setAlertModal(true);
            setGo(true);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    return (
        <SignupUI
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            onClickcreateUser={onClickcreateUser}
            // 모달
            alertModal={alertModal}
            errorAlertModal={errorAlertModal}
            modalContents={modalContents}
            onClickRoutingModal={onClickRoutingModal}
            onClickconfirmModal={onClickconfirmModal}
            onClickErrorModal={onClickErrorModal}
            onClickCancle={onClickCancle}
            MoveToPage={MoveToPage}
            // router={router}
            go={go}
        />
    );
}
