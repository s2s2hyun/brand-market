import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./boardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);
    const [fileUrls, setFileUrls] = useState(["", "", ""]);
    const [isOpen, setIsOpen] = useState(false);

    const onClickImageDelete = (index: number) => () => {
        const newFileUrls = [...fileUrls];
        newFileUrls.splice(index, 1);
        setFileUrls(newFileUrls);
    };

    return (
        <BoardWriteUI
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
            fileUrls={fileUrls}
            onClickImageDelete={onClickImageDelete}
            isOpen={isOpen}
        />
    );
}
