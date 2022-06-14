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
                <S.Join>JOIN MEMBER</S.Join>
                <S.Divider></S.Divider>
                <S.SignupForm
                    onSubmit={props.handleSubmit(props.onClickcreateUser as unknown as () => void)}
                >
                    <S.SignupWrapper>
                        <S.SignIdWrapper>
                            <S.Id>아이디</S.Id>
                            <S.SignInput
                                type="text"
                                placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                                {...props.register("email")}
                            ></S.SignInput>
                        </S.SignIdWrapper>
                        <S.SignPwWrapper>
                            <S.Password>비밀번호</S.Password>
                            <S.SignInput
                                type="password"
                                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                                {...props.register("password")}
                            ></S.SignInput>
                        </S.SignPwWrapper>
                        <S.SignPwConfirmWrapper>
                            <S.PasswordConfirm>비밀번호 확인</S.PasswordConfirm>
                            <S.SignInput
                                type="password"
                                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                                {...props.register("confirmPassword")}
                            ></S.SignInput>
                        </S.SignPwConfirmWrapper>
                        <S.SignNameWrapper>
                            <S.Name>이름</S.Name>
                            <S.SignInput
                                type="text"
                                placeholder="이름을 입력해주세요"
                                {...props.register("name")}
                            ></S.SignInput>
                        </S.SignNameWrapper>
                        <S.Divider />
                    </S.SignupWrapper>
                    <S.SignUpButtonWrapper>
                        <S.CancleButton type="button" onClick={props.MoveToPage("/")}>
                            취소
                        </S.CancleButton>
                        <S.SignupButton title="회원가입하기" type="submit">
                            확인
                        </S.SignupButton>
                    </S.SignUpButtonWrapper>
                </S.SignupForm>
            </S.Wrapper>
        </>
    );
}
