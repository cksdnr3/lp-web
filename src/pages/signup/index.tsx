import Reract, { FormEvent } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Button from 'src/components/button';
import Form from 'src/components/form';
import Input from 'src/components/input';
import useInput from 'src/hooks/useInput';
import { Validate } from 'src/utils/validate';
import { SingupStyle } from './styles';

function Signup() {
  const emailInput = useInput('', Validate.email);
  const codeInput = useInput('');
  const passwordInput = useInput('', Validate.password);
  const passwordCheckInput = useInput('');
  const nameInput = useInput('');
  const [isIdentified, setIsIdentified] = useState<boolean>(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

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
    setIsValidatedPassword(Validate.passwordCheck(passwordCheckInput.value, passwordInput.value));
  }, [passwordInput.value, passwordCheckInput.value]);

  return (
    <SingupStyle.Wrapper>
      <Form
        onSubmit={onSubmit}
        header={<h1>본인 정보를 입력해주세요</h1>}
        content={[
          <Input
            {...emailInput}
            disabled={isIdentified}
            label="이메일"
            button={
              <SingupStyle.Button type="button" onClick={onClickIdentify} disabled={isVerified || !emailInput.isValid}>
                {isIdentified ? '재전송' : '인증'}
              </SingupStyle.Button>
            }
          />,
          isIdentified ? (
            <Input
              {...codeInput}
              disabled={isVerified}
              placeholder="전송된 코드를 입력해주세요."
              button={
                <SingupStyle.Button type="button" onClick={onClickVerifyEmailCode} disabled={isVerified}>
                  확인
                </SingupStyle.Button>
              }
            />
          ) : undefined,
          <Input {...passwordInput} type="password" label="비밀번호" errorMsg="비밀번호를 입력해주세요." />,
          <Input
            {...passwordCheckInput}
            type="password"
            label="비밀번호 확인"
            isError={!isValidatedPassword}
            errorMsg="비밀번호가 일치하지 않습니다."
          />,
          <Input {...nameInput} label="이름" errorMsg="이름을 입력해주세요." />,
        ]}
        footer={
          <div>
            <Button text="회원가입" />
            <div>로그인 하러가기</div>
          </div>
        }
      />
    </SingupStyle.Wrapper>
  );
}

export default Signup;
