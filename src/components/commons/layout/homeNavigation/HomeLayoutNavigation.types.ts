import { NextRouter } from "next/router";

export interface ILayoutHomeNavagationUIProps {
    onClickMain: () => void;
    router: NextRouter;
    onClickBrand: () => void;
    onClickBoard: () => void;
    onClickMyPage: () => void;
}
