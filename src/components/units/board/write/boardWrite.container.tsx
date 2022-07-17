import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";
import {
    FormValues,
    IBoardWriteProps,
    ICreateBoardInput,
    IUpdateBoardInput,
} from "./boardWrite.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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
    price: yup.string(),
    addressDetail: yup.string(),
});

export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const { handleSubmit, register, setValue, trigger, getValues, formState, reset } =
        useForm<FormValues>({
            resolver: yupResolver(props.isEdit ? editSchema : schema),
            mode: "onChange",
        });

    // 주소 State
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [submit, setSubmit] = useState();
    const [update, setUpdate] = useState<string | string[] | undefined>();

    const [fileUrls, setFileUrls] = useState(["", "", ""]);

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

    const onClickSubmit = async (data: ICreateBoardInput) => {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: data.writer,
                        password: data.password,
                        title: data.title,
                        contents: data.contents,
                        youtubeUrl: data.youtubeUrl,
                        images: fileUrls,
                        boardAddress: {
                            zipcode: zipcode,
                            address: address,
                            addressDetail: data.addressDetail,
                        },
                    },
                },
            });
            setModalContents("게시글 등록 성공했습니다.");
            setAlertModal(true);
            setGo(true);
            setSubmit(result.data.createBoard._id);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    const onClickUpdate = async (data: IUpdateBoardInput) => {
        const currentFiles = JSON.stringify(fileUrls);
        const defaultFiles = JSON.stringify(data.fetchBoard?.images);
        const isChangedFiles = currentFiles !== defaultFiles;
        if (
            !data.title &&
            !data.contents &&
            !data.youtubeUrl &&
            !address &&
            !data.addressDetail &&
            !isChangedFiles
        ) {
            setModalContents("수정한 내용이 없습니다.");
            setErrorAlertModal(true);
        }
        try {
            const result = await updateBoard({
                variables: {
                    boardId: String(router.query.boardId),
                    password: data.password,
                    updateBoardInput: {
                        title: data.title,
                        contents: data.contents,
                        images: fileUrls,
                        youtubeUrl: data.youtubeUrl,
                        boardAddress: {
                            zipcode,
                            address,
                            addressDetail: data.addressDetail,
                        },
                    },
                },
            });
            setModalContents("게시글 등록 성공했습니다.");
            setAlertModal(true);
            setGo(true);
            setUpdate(result.data.createBoard._id);
        } catch (error: any) {
            setModalContents(error.message);
            setErrorAlertModal(true);
        }
    };

    const onClickImageDelete = (index: number) => () => {
        const newFileUrls = [...fileUrls];
        newFileUrls.splice(index, 1);
        setFileUrls(newFileUrls);
    };

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };

    return (
        <BoardWriteUI
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
            fileUrls={fileUrls}
            onClickImageDelete={onClickImageDelete}
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
            onChangeFileUrls={onChangeFileUrls}
            handleSubmit={handleSubmit}
            formState={formState}
        />
    );
}
