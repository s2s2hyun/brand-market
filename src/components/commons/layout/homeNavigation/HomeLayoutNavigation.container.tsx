import { useRouter } from "next/router";
import HomeNavigationUI from "./HomeLayoutNavigation.presenter";

export default function HomeNavigationContainer() {
    const router = useRouter();

    const onClickMain = () => {
        router.push(`/`);
    };

    const onClickBrand = () => {
        router.push(`/brand`);
    };

    const onClickBoard = () => {
        router.push(`/board`);
    };

    const onClickMyPage = () => {
        router.push(`/mypage`);
    };

    return (
        <HomeNavigationUI
            onClickMain={onClickMain}
            onClickBrand={onClickBrand}
            onClickBoard={onClickBoard}
            onClickMyPage={onClickMyPage}
            router={router}
        />
    );
}
