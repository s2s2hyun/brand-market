import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/errorAlert";
import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";

export default function LoginUI(props: ILoginUIProps) {
    console.log("로그인");
    return (
        <>
            {props.alertModal && (
                <Alert onClickExit={props.onClickExitAlertModal} contents={props.modalContents} />
            )}

            {props.errorAlertModal && (
                <ErrorAlert
                    onClickExit={props.onClickExitErrorModal}
                    contents={props.modalContents}
                />
            )}
            <S.Wrapper>
                <S.Login>LOGIN</S.Login>
                <S.Divider />
                <S.LoginForm
                    onSubmit={props.handleSubmit(props.onClickLogin as unknown as () => void)}
                >
                    <S.LoginWrapperCenter>
                        <S.LoginWrapper>
                            <S.IdWrapper>
                                <S.Id>아이디</S.Id>
                                <S.LoginInput
                                    type="text"
                                    placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                                    {...props.register("email")}
                                ></S.LoginInput>
                            </S.IdWrapper>
                            <S.PwWrapper>
                                <S.Pw>비밀번호</S.Pw>
                                <S.LoginInput
                                    type="password"
                                    placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                                    {...props.register("password")}
                                ></S.LoginInput>
                            </S.PwWrapper>
                        </S.LoginWrapper>
                        <S.LoginButton title="로그인" type="submit">
                            로그인
                        </S.LoginButton>
                    </S.LoginWrapperCenter>
                </S.LoginForm>
            </S.Wrapper>
        </>
    );
}
