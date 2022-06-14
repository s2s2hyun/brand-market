import { useRouter } from "next/router";
import NavigationUI from "./LayoutNavigation.presenter";

export default function NavigationContainer() {
    const router = useRouter();

    const onClickMain = () => {
        router.push(`/`);
    };

    return <NavigationUI onClickMain={onClickMain} />;
}
