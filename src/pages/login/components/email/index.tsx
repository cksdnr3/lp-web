import React, { FormEvent, Dispatch } from 'react';
import Button from 'src/components/button';
import Form from 'src/components/form';
import Input from 'src/components/input';
import { EmailLoginStyle } from './styles';

interface IEmailLoginProps {
  state: {
    email: readonly [string, Dispatch<string>];
    password: readonly [string, Dispatch<string>];
  };
  event: {
    onSubmit: (event: FormEvent) => void;
    onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

function EmailLogin({ state, event }: IEmailLoginProps) {
  const [email, setEmail] = state.email;
  const [password, setPassword] = state.password;
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
        <Input key={0} value={email} setValue={setEmail} onChange={event.onChangeEmail} label="이메일" />,
        <Input
          key={1}
          value={password}
          onChange={event.onChangePassword}
          setValue={setPassword}
          label="비밀번호"
          type="password"
        />,
      ]}
      footer={<Button text="로그인" />}
    />
  );
}

export default EmailLogin;
