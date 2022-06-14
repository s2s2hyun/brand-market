import { Useditem } from "../../../../commons/types/generated/types";

export interface IBrandListUIProps {
    data: {
        fetchUseditems: Array<Useditem>;
    };
    onLoadMore: (page: number) => void;
}
