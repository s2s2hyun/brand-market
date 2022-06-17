import BrandWriteUI from "./BrandWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, MouseEventHandler, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { CREAT_PRODUCT_ITEM, FETCH_USEDITEM, UPDATE_PRODUCT_ITEM } from "./BrandWrite.queries";
import { FormValues } from "./BrandWrite.types";
import {
    CreateUseditemInput,
    UpdateUseditemInput,
} from "../../../../commons/types/generated/types";

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
    addressDetail: yup.string(),
});

const editSchema = yup.object({
    name: yup.string(),
    remarks: yup.string(),
    contents: yup.string(),
    price: yup.string(),
    addressDetail: yup.string(),
});

export default function BrandWriteContainer(props: any) {
    const router = useRouter();
    const fileRef = useRef<HTMLInputElement>(null);
    // 이미지 업로드
    const onClickUpload = () => {
        fileRef.current?.click();
    };

    const [hashArr, setHashArr] = useState<string[]>([]);
    const [fileUrls, setFileUrls] = useState(["", "", ""]);
    const [isActive] = useState(false);

    const [createUseditem] = useMutation(CREAT_PRODUCT_ITEM);
    const [updateUseditem] = useMutation(UPDATE_PRODUCT_ITEM);
    // const { data } = useQuery<Pick<Query, "fetchUseditem">, QueryFetchUseditemArgs>(
    //     FETCH_USEDITEM,
    //     {
    //         variables: {
    //             useditemId: String(router.query._id),
    //         },
    //     }
    // );

    const { handleSubmit, register, setValue, trigger, getValues, formState } = useForm<FormValues>(
        {
            resolver: yupResolver(props.isEdit ? editSchema : schema),
            mode: "onChange",
        }
    );
    // 주소 State
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [submit, setSubmit] = useState();
    const [update, setUpdate] = useState<string | string[] | undefined>();
    const onChangeContents = (value: string) => {
        setValue("contents", value === "<p><br><p>" ? "" : value);
        trigger("contents");
    };

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };

    const onClickImageDelete = (index: number) => () => {
        const newFileUrls = [...fileUrls];
        newFileUrls.splice(index, 1);
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

    // const onClickHatagDelete = (event: MouseEventHandler<HTMLButtonElement>, index: number) => {
    //     const newTagarr = event.target.value.split(" ");
    //     newTagarr.splice(index, 1);
    //     setHashArr(newTagarr);
    // };

    const onClickDeleteHash = (event: any) => {
        hashArr.splice(Number(event.target.id), 1);
        setHashArr([...hashArr]);
    };

    // 해쉬태그
    // const onKeyUpHash = (event: { keyCode: number; target: { value: string } }) => {
    //     if (event.keyCode === 32 && event.target.value !== " ") {
    //         setHashArr([...hashArr, "#" + event.target.value.trim()]);
    //         event.target.value = "";
    //     }
    // };
    const onKeyUpHash = (event: any) => {
        if (event.keyCode === 32 && event.target.value !== " ") {
            setHashArr([...hashArr, "#" + event.target.value]);
            //  실제 서비스에서는 #을 우리가 직접 추가하기 때문에 #을 지우고 글쓴이가 쓰도록 하자

            event.target.value = "";
        }
    };

    useEffect(() => {
        console.log("hashArr", hashArr);
    }, [hashArr]);

    // 얼럿모달
    const [alertModal, setAlertModal] = useState(false);
    const [modalContents, setModalContents] = useState("");
    const [errorAlertModal, setErrorAlertModal] = useState(false);
    const [go, setGo] = useState(false);

    // 등록하기 모달 라우터
    const onClickExitSubmitModal = () => {
        setAlertModal(false);
        router.push(`/brands/${submit}`);
    };

    // 수정하기 모달 라우터
    const onClickExitUpdateModal = () => {
        setAlertModal(false);
        router.push(`/brands/${update}`);
    };

    // 에러 모달
    const onClickExitErrorModal = () => {
        setErrorAlertModal(false);
    };

    // 모달 주소입력
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const handleOk = () => {
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleComplete = (data: any) => {
        setIsOpen(false);
        setAddress(data.address);
        setZipcode(data.zonecode);
    };

    const onClickSubmit = async (data: CreateUseditemInput) => {
        console.log("등록클릭");

        try {
            const result = await createUseditem({
                variables: {
                    createUseditemInput: {
                        name: data.name,
                        remarks: data.remarks,
                        contents: data.contents,
                        price: data.price,
                        tags: hashArr,
                        images: fileUrls,
                        useditemAddress: {
                            zipcode: zipcode,
                            address: address,
                            addressDetail: data.detailAddress,
                        },
                    },
                },
            });
            setModalContents("상품 등록에 성공했습니다");
            setAlertModal(true);
            setGo(true);
            setSubmit(result.data.createUseditem._id);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    const onClickUpdate = async (data: UpdateUseditemInput) => {
        const currentFiles = fileUrls;
        const defaultFiles = data.fetchUseditem?.images;
        const isChangedFiles = currentFiles !== defaultFiles;

        if (!data.name && !data.remarks && !data.contents && !isChangedFiles && data.price) {
            setModalContents("수정한 내용이 없습니다.");
            setErrorAlertModal(true);
        }

        try {
            await updateUseditem({
                variables: {
                    ...data,
                    tags: hashArr,
                    images: fileUrls,
                    useditemAddress: {
                        zipcode: zipcode,
                        address: address,
                        addressDetail: data.useditemAddress?.addressDetail,
                    },
                },
            });
            setModalContents("상품 수정에 성공하였습니다.");
            setAlertModal(true);
            setGo(false);
            setUpdate(router.query.usedId);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    return (
        <BrandWriteUI
            setValue={setValue}
            getValues={getValues}
            hashArr={hashArr}
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
            onClickExitSubmitModal={onClickExitSubmitModal}
            onClickExitUpdateModal={onClickExitUpdateModal}
            alertModal={alertModal}
            modalContents={modalContents}
            go={go}
            onClickExitErrorModal={onClickExitErrorModal}
            errorAlertModal={errorAlertModal}
            isOpen={isOpen}
            showModal={showModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
            handleComplete={handleComplete}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            address={address}
            zipcode={zipcode}
            data={undefined}
            isEdit={false}
            onClickImageDelete={onClickImageDelete}
            onClickDeleteHash={onClickDeleteHash}
        />
    );
}
