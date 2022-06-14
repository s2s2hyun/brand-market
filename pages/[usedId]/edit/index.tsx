import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEM } from "../../../src/components/units/used/detail/UsedDetail.queries";
import UsedWrite from "../../../src/components/units/used/write/UsedWrite.container";

export default function UsedEditPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_USEDITEM, {
        variables: {
            useditemId: String(router.query.usedId),
        },
    });

    return <UsedWrite isEdit={true} data={data?.fetchUseditem} />;
}
