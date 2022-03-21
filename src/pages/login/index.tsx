import React, { FormEvent } from 'react';
import { useCallback } from 'react';
import { authAPI } from 'src/apis/auth';
import Input from 'src/components/input';
import useInput from 'src/hooks/useInput';
import { LoginStyles } from './styles';
import Form from 'src/components/form';
import axios, { AxiosError } from 'axios';
import Button from 'src/components/button';

function Login() {
  const { value: email, setValue: setEmail, onChange: onChangeEmail } = useInput('');
  const { value: password, setValue: setPassword, onChange: onChangePassword } = useInput('');

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        const response = await authAPI.post.login({ email, password });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.response?.data);
        }
      }
    },
    [email, password],
  );

  return (
    <LoginStyles.Wrapper>
      <Form
        onSubmit={onSubmit}
        header={<LoginStyles.Heading>로그인</LoginStyles.Heading>}
        content={[
          <Input key={0} value={email} onChange={onChangeEmail} setValue={setEmail} label="이메일" />,
          <Input
            key={1}
            value={password}
            onChange={onChangePassword}
            setValue={setPassword}
            label="비밀번호"
            type="password"
          />,
        ]}
        footer={<Button text="로그인" />}
      />
    </LoginStyles.Wrapper>
  );
}

export default Login;
