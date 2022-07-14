import { useRouter } from "next/router";
import Alert from "../../../commons/modal/alert/alert";
import ErrorAlert from "../../../commons/modal/errorModal/errorAlert";
import * as S from "./signup.styles";
import { ISignupUIProps } from "./signup.types";

export default function SignUpUI(props: ISignupUIProps) {
    return (
        <>
            {props.alertModal && (
                <Alert
                    onClickExit={props.go ? props.onClickRoutingModal : props.onClickconfirmModal}
                    contents={props.modalContents}
                />
            )}
            {props.errorAlertModal && (
                <ErrorAlert onClickExit={props.onClickErrorModal} contents={props.modalContents} />
            )}
            <S.Wrapper>
                <S.SignupForm
                    onSubmit={props.handleSubmit(props.onClickcreateUser as unknown as () => void)}
                >
                    <S.SignUpPageWrapper>
                        <S.PictureWrapper>
                            <S.SignUpPicture src="/images/signuppage.png" />
                        </S.PictureWrapper>
                        <S.SignUpWrapper>
                            <div>Sign Up</div>
                            <S.SignUpInputWrapper>
                                <div>Email Address</div>
                                <input
                                    type="text"
                                    placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                                    {...props.register("email")}
                                />
                                <div>Password</div>
                                <input
                                    type="password"
                                    placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                                    {...props.register("password")}
                                />
                                <div>Password confirm</div>
                                <input
                                    type="password"
                                    placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                                    {...props.register("confirmPassword")}
                                />
                                <div>Name</div>
                                <input
                                    type="text"
                                    placeholder="이름을 입력해주세요"
                                    {...props.register("name")}
                                />
                            </S.SignUpInputWrapper>
                            <button title="회원가입하기" type="submit">
                                Sign Up
                            </button>
                            <button type="button" onClick={props.MoveToPage("/")}>
                                Cancel
                            </button>
                        </S.SignUpWrapper>
                    </S.SignUpPageWrapper>
                </S.SignupForm>
            </S.Wrapper>
        </>
    );
}
