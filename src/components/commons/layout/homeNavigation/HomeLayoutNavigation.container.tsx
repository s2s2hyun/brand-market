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

    return (
        <HomeNavigationUI onClickMain={onClickMain} onClickBrand={onClickBrand} router={router} />
    );
}
