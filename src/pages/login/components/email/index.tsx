import React from 'react';
import Button from 'src/components/button';
import Form from 'src/components/form';
import Input from 'src/components/input';
import useLogin from '../../hook';
import { EmailLoginStyle } from './styles';

type EamilLoginProps = ReturnType<typeof useLogin>;

function EmailLogin({ input, event }: EamilLoginProps) {
  return (
    <Form
      onSubmit={event.onSubmit}
      style={{ marginBottom: 20 }}
      header={
        <div>
          <EmailLoginStyle.Heading>LP 장터</EmailLoginStyle.Heading>
          <p style={{ width: 200, margin: '20px auto 0' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex doloribus veritatis dicta similique .
          </p>
        </div>
      }
      content={[
        <Input label="이메일" {...input.email} />,
        <Input label="비밀번호" type="password" {...input.passowrd} />,
      ]}
      footer={<Button text="로그인" />}
    />
  );
}

export default EmailLogin;
