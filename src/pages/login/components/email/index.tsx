import React from 'react';
import Button from 'src/components/button';
import Form from 'src/components/form';
import Input from 'src/components/input';
import Logo from 'src/components/logo';
import useLogin from '../../hook';
import { EmailLoginStyle } from './styles';

type EamilLoginProps = ReturnType<typeof useLogin>;

function EmailLogin({ input, event, query, error }: EamilLoginProps) {
  return (
    <Form
      onSubmit={event.onSubmit}
      style={{ marginBottom: 20 }}
      header={
        <EmailLoginStyle.Heading>
          <Logo size="large" />
        </EmailLoginStyle.Heading>
      }
      content={[
        <Input label="이메일" isError={error.isEmailError} errorMsg="이메일을 입력해주세요." {...input.email} />,
        <Input
          label="비밀번호"
          type="password"
          isError={error.isPasswordError}
          errorMsg="비밀번호를 입력해주세요."
          {...input.password}
        />,
      ]}
      footer={<Button text="로그인" isLoading={query.login.isLoading} />}
    />
  );
}

export default EmailLogin;
