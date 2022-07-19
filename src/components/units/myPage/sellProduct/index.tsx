import { useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "../myPage.queries";
import * as S from "./sellProduct.styles";
export default function SellProduct() {
    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchPointTransactionsOfSelling">,
        IQueryFetchPointTransactionsOfSellingArgs
    >(FETCH_POINT_TRANSACTIONS_OF_SELLING);
    return <S.Wrapper></S.Wrapper>;
}
