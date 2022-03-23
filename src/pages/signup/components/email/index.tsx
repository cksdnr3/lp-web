import Reract, { FormEvent, Dispatch } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Button from 'src/components/button';
import Form from 'src/components/form';
import Input from 'src/components/input';
import useInput from 'src/hooks/useInput';
import { Validate } from 'src/utils/validate';
import { EmailStyle } from './styles';

function EmailSignup() {
  const emailInput = useInput('', Validate.email);
  const codeInput = useInput('');
  const passwordInput = useInput('');
  const passwordCheckInput = useInput('');

  const [isIdentified, setIsIdentified] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const [formError, setFormError] = useState({
    isEmailError: false,
    isPasswordError: false,
    isPasswordCheckError: false,
  });

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (!isVerified) {
        setFormError({
          isEmailError: true,
          isPasswordError: false,
          isPasswordCheckError: false,
        });
        return;
      }

      if (!Validate.password(passwordInput.value)) {
        setFormError({
          isEmailError: false,
          isPasswordError: true,
          isPasswordCheckError: false,
        });
        return;
      }

      if (!Validate.passwordCheck(passwordCheckInput.value, passwordInput.value)) {
        setFormError({
          isEmailError: false,
          isPasswordError: false,
          isPasswordCheckError: true,
        });
        return;
      }

      setFormError({
        isEmailError: false,
        isPasswordError: false,
        isPasswordCheckError: false,
      });
    },
    [passwordInput.value, passwordCheckInput.value, isVerified],
  );

  const onClickIdentify = useCallback(() => {
    setIsIdentified(true);
  }, []);

  const onClickVerifyEmailCode = useCallback(() => {
    setIsVerified(true);
  }, []);

  useEffect(() => {
    setIsIdentified(false);
  }, [emailInput.value]);

  useEffect(() => {
    if (isVerified) {
      setFormError({
        isEmailError: false,
        isPasswordError: false,
        isPasswordCheckError: false,
      });
    }
  }, [isVerified]);

  return (
    <Form
      onSubmit={onSubmit}
      style={{ marginBottom: 20 }}
      header={<h1>본인 정보를 입력해주세요</h1>}
      content={[
        <Input
          disabled={isIdentified}
          label="이메일"
          isError={formError.isEmailError}
          errorMsg="이메일 인증을 진행해주세요."
          button={
            <EmailStyle.Button type="button" onClick={onClickIdentify} disabled={isVerified || !emailInput.isValid}>
              {isIdentified ? '재전송' : '인증'}
            </EmailStyle.Button>
          }
          {...emailInput}
        />,
        isIdentified ? (
          <Input
            disabled={isVerified}
            placeholder="전송된 코드를 입력해주세요."
            button={
              <EmailStyle.Button type="button" onClick={onClickVerifyEmailCode} disabled={isVerified}>
                확인
              </EmailStyle.Button>
            }
            {...codeInput}
          />
        ) : undefined,
        <Input
          type="password"
          label="비밀번호"
          isError={formError.isPasswordError}
          errorMsg="비밀번호를 입력해주세요. (영문 숫자 8 ~ 30자)"
          {...passwordInput}
        />,
        <Input
          type="password"
          label="비밀번호 확인"
          isError={formError.isPasswordCheckError}
          errorMsg="비밀번호가 일치하지 않습니다."
          {...passwordCheckInput}
        />,
      ]}
      footer={<Button text="회원가입" />}
    />
  );
}

export default EmailSignup;
