export interface IBoardDetailUIProps {
    data: any;
    onClickMoveToBoardList: () => void;
    onClickMoveToBoardEdit: () => void;
    onClickDelete: () => Promise<void>;
    onClickLike: () => void;
    onClickDislike: () => void;
    go: boolean;
    onClickExitAlertModal: () => void;
    alertModal: boolean;
    modalContents: string;
    onClickExitErrorModal: () => void;
    errorAlertModal: boolean;
    onClickconfirmModal: () => void;
    onClickRoutingModal: () => void;
}
