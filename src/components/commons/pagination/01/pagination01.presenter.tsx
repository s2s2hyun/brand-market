import { Page, Left, Right } from "./pagination01.styles";
import { IPaginations01UIProps } from "./pagination01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
    return (
        <div>
            <Page onClick={props.onClickPrevPage}>
                <Left src="/images/left.png" />
            </Page>
            {new Array(5).fill(1).map(
                (_, index) =>
                    index + props.startPage <= props.lastPage && (
                        <Page
                            key={props.startPage + index}
                            onClick={props.onClickPage}
                            id={String(props.startPage + index)}
                            isActive={props.startPage + index === props.activedPage}
                        >
                            {props.startPage + index}
                        </Page>
                    )
            )}
            <Page onClick={props.onClickNextPage}>
                <Right src="/images/right.png" />
            </Page>
        </div>
    );
}
