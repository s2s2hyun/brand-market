import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEM } from "../../../../src/components/units/brand/write/BrandWrite.queries";
import BrandWrite from "../../../../src/components/units/brand/write/BrandWrite.container";

export default function BrandWriteEditPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_USEDITEM, {
        variables: {
            useditemId: String(router.query.usedId),
        },
    });

    return <BrandWrite isEdit={true} data={data?.fetchUseditem} />;
}
