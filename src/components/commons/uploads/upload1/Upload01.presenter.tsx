import { UploadButton, UploadFileHidden, UploadImage } from "./Upload01.styles";
import { IUploads01UIProps } from "./Upload01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
    return (
        <>
            {props.fileUrl ? (
                <UploadImage
                    onClick={props.onClickUpload}
                    src={`https://storage.googleapis.com/${props.fileUrl}`}
                />
            ) : (
                <UploadButton type="button" onClick={props.onClickUpload}>
                    <span>+</span>
                    <span>Upload</span>
                </UploadButton>
            )}
            <UploadFileHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
        </>
    );
}
