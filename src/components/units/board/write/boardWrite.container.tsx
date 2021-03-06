import { ChangeEvent, useEffect, useState } from "react";
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
    writer: yup.string().required("필수 입력 사항입니다."),
    password: yup.string().required("필수 입력 사항입니다."),
    contents: yup
        .string()
        .min(5, "게시글내용을 5자 이상 작성")
        .required("상품설명은 필수 입력 사항입니다."),
    title: yup
        .string()
        .min(5, "게시글내용을 5자 이상 작성")
        .required("상품설명은 필수 입력 사항입니다."),
    addressDetail: yup.string(),
    youtubeUrl: yup.string(),
});

const editSchema = yup.object({
    writer: yup.string(),
    password: yup.string(),
    contents: yup.string(),
    title: yup.string(),
    youtubeUrl: yup.string(),
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
    // 리액트 퀼
    const onChangeContents = (value: string) => {
        setValue("contents", value === "<p><br><p>" ? "" : value);
        trigger("contents");
    };

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
        router.push(`/board/${submit}`);
    };

    // 수정하기 모달 라우터
    const onClickExitUpdateModal = () => {
        setAlertModal(false);
        router.push(`/board/${update}`);
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
            router.push(`/board/${result.data.updateBoard._id}`);
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
    console.log(props.data?.fetchBoard);
    useEffect(() => {
        if (!props.data) return;
        if (props.data?.fetchBoard.images?.length) {
            setFileUrls(props.data?.fetchBoard.images);
        }
        reset({
            contents: props.data?.fetchBoard.contents,
            writer: props.data?.fetchBoard.writer,
            addressDetail: props.data?.fetchBoard.boardAddress.addressDetail,
            title: props.data?.fetchBoard.title,
            youtubeUrl: props.data?.fetchBoard.youtubeUrl,
        });
    }, [props.data]);

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
            getValues={getValues}
            onChangeContents={onChangeContents}
            address={address}
            zipcode={zipcode}
            register={register}
        />
    );
}
