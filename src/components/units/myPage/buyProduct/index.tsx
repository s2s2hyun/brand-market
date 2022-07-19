import { useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "../myPage.queries";
import * as S from "./buyProduct.styles";
export default function BuyProduct() {
    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchPointTransactionsOfBuying">,
        IQueryFetchPointTransactionsOfBuyingArgs
    >(FETCH_POINT_TRANSACTIONS_OF_BUYING);
    return <S.Wrapper></S.Wrapper>;
}
