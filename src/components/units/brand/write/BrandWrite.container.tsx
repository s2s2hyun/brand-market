import BrandWriteUI from "./BrandWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREAT_PRODUCT_ITEM, UPDATE_PRODUCT_ITEM } from "./BrandWrite.queries";
import { FormValues } from "./BrandWrite.types";

const schema = yup.object({
    name: yup.string().required("필수 입력 사항입니다."),
    remarks: yup.string().required("필수 입력 사항입니다."),
    contents: yup
        .string()
        .min(5, "상품설명을 5자 이상 작성")
        .required("상품설명은 필수 입력 사항입니다."),
    price: yup
        .number()
        .max(10000000000, "금액입력이 너무 큽니다 ")
        .required("판매가격은 필수 입력 사항입니다."),
    detailAddress: yup.string(),
});

const editSchema = yup.object({
    name: yup.string(),
    remarks: yup.string(),
    contents: yup.string(),
    price: yup.string(),
    detailAddress: yup.string(),
});

export default function BrandWriteContainer(props: any) {
    const router = useRouter();
    const fileRef = useRef<HTMLInputElement>(null);
    // 이미지 업로드
    const onClickUpload = () => {
        fileRef.current?.click();
    };

    const [hashArr, setHashArr] = useState([{}]);
    const [fileUrls, setFileUrls] = useState(["", "", ""]);
    const [isActive] = useState(false);

    const [createUseditem] = useMutation(CREAT_PRODUCT_ITEM);
    const [updateUseditem] = useMutation(UPDATE_PRODUCT_ITEM);

    const { handleSubmit, register, setValue, trigger, getValues, formState } = useForm<FormValues>(
        {
            resolver: yupResolver(props.isEdit ? editSchema : schema),
            mode: "onChange",
        }
    );

    const onChangeContents = (value: string) => {
        setValue("contents", value === "<p><br><p>" ? "" : value);
        trigger("contents");
    };

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };

    useEffect(() => {
        if (props.data?.images?.length) {
            setFileUrls([...props.data?.images]);
        }
    }, [props.data]);

    const onChangeTags = (event: ChangeEvent<HTMLInputElement>) => {
        const tagArr = event.target.value.split(" ");
        setHashArr(tagArr);
    };

    // 해쉬태그
    const onKeyUpHash = (event: { keyCode: number; target: { value: string } }) => {
        if (event.keyCode === 32 && event.target.value !== " ") {
            setHashArr([...hashArr, "#" + event.target.value.trim()]);
            event.target.value = "";
        }
    };
    // const onKeyUpHash = (event: any) => {
    //     if (event.keyCode === 32 && event.target.value !== " ") {
    //         setHashArr([...hashArr, "#" + event.target.value]);
    //         //  실제 서비스에서는 #을 우리가 직접 추가하기 때문에 #을 지우고 글쓴이가 쓰도록 하자

    //         event.target.value = "";
    //     }
    // };

    useEffect(() => {
        console.log("hashArr", hashArr);
    }, [hashArr]);

    return (
        <BrandWriteUI
            setValue={setValue}
            getValues={getValues}
            hassArr={hashArr}
            isActive={isActive}
            fileUrls={fileUrls}
            onKeyUpHash={onKeyUpHash}
            register={register}
            onChangeContents={onChangeContents}
            onChangeTags={onChangeTags}
            onChangeFileUrls={onChangeFileUrls}
            handleSubmit={handleSubmit}
            onClickUpload={onClickUpload}
            formState={formState}
        />
    );
}
