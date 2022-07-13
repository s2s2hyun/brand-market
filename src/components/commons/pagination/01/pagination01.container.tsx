import { MouseEvent, useState } from "react";
import Paginations01UI from "./pagination01.presenter";
import { IPaginations01Props } from "./pagination01.types";

export default function Paginations01(props: IPaginations01Props) {
    const [startPage, setStartPage] = useState(1);
    const [activedPage, setActivedPage] = useState(1);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
        if (!(event.target instanceof Element)) return;
        const activedPage = Number(event.target.id);
        setActivedPage(activedPage);
        props.refetch({ page: activedPage });
    };

    const onClickPrevPage = () => {
        if (startPage <= 1) return;
        setStartPage((prev) => prev - 5);
        setActivedPage(startPage - 5);
        props.refetch({ page: startPage - 5 });
    };

    const onClickNextPage = () => {
        if (startPage + 5 > props.lastPage) return;
        setStartPage((prev) => prev + 5);
        setActivedPage(startPage + 5);
        props.refetch({ page: startPage + 5 });
    };

    return (
        <Paginations01UI
            startPage={startPage}
            lastPage={props.lastPage}
            activedPage={activedPage}
            onClickPage={onClickPage}
            onClickPrevPage={onClickPrevPage}
            onClickNextPage={onClickNextPage}
        />
    );
}
