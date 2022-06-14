import { useRouter } from "next/router";
import HomeNavigationUI from "./HomeLayoutNavigation.presenter";

export default function HomeNavigationContainer() {
    const router = useRouter();

    const onClickMain = () => {
        router.push(`/`);
    };

    return <HomeNavigationUI onClickMain={onClickMain} router={router} />;
}
