import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/errorAlert";
import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";

export default function LoginUI(props: ILoginUIProps) {
    return (
        <>
            {props.alertModal && (
                <Alert
                    onClickExit={props.go ? props.onClickRoutingModal : props.onClickconfirmModal}
                    contents={props.modalContents}
                />
            )}
            {props.errorAlertModal && (
                <ErrorAlert
                    onClickExit={props.onClickExitErrorModal}
                    contents={props.modalContents}
                />
            )}
            <S.Wrapper>
                <S.LoginForm
                    onSubmit={props.handleSubmit(props.onClickLogin as unknown as () => void)}
                >
                    <S.LoginPageWrapper>
                        <S.PictureWrapper>
                            <S.LoginPicture src="/images/loginpage.png" />
                        </S.PictureWrapper>
                        <S.LoginWrapper>
                            <div>Sign in</div>
                            <S.InputsWrapper>
                                <div>Email Address</div>
                                <input
                                    type="text"
                                    placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                                    {...props.register("email")}
                                />
                                <S.Error>{props.formState.errors.email?.message}</S.Error>
                                <div>Password</div>
                                <input
                                    type="password"
                                    placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                                    {...props.register("password")}
                                />
                                <S.Error>{props.formState.errors.password?.message}</S.Error>
                                <button title="로그인" type="submit">
                                    Login
                                </button>
                            </S.InputsWrapper>
                            <span>
                                Are you new here? <span onClick={props.onClickSignup}>Sign up</span>
                            </span>
                        </S.LoginWrapper>
                    </S.LoginPageWrapper>
                </S.LoginForm>
            </S.Wrapper>
        </>
    );
}
