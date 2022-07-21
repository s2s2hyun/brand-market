import { useRouter } from "next/router";
import MyPageNaviUI from "./MyPageLayout.presenter";

export default function MyPageNavi() {
    const router = useRouter();
    const onClickBasket = () => {
        router.push(`/mypage/basket`);
    };

    const onClickHeart = () => {
        router.push(`/my`);
    };

    const onClickTodayProduct = () => {
        router.push(`/mypage/todayProduct`);
    };

    const onClickBuyProduct = () => {
        router.push(`/mypage/buyProduct`);
    };

    const onClickSellProduct = () => {
        router.push(`/mypage/sellProduct`);
    };

    return (
        <MyPageNaviUI
            router={router}
            // onClickBasket={onClickBasket}
            // onClickTodayProduct={onClickTodayProduct}
            // onClickBuyProduct={onClickBuyProduct}
            // onClickSellProduct={onClickSellProduct}
        />
    );
}
