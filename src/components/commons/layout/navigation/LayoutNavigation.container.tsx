import { useRouter } from "next/router";
import NavigationUI from "./LayoutNavigation.presenter";

export default function NavigationContainer() {
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

    return (
        <NavigationUI
            onClickMain={onClickMain}
            onClickBrand={onClickBrand}
            onClickBoard={onClickBoard}
        />
    );
}
