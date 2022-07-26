import { useAuth } from "../../commons/hocs/useAuth";
import * as S from "./MyPage.styles";

export default function MyPageUI() {
    useAuth();
    return <S.Wrapper></S.Wrapper>;
}
