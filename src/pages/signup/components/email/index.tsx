import Reract, { CSSProperties, useMemo } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import Button from 'src/components/button';
import Form from 'src/components/form';
import Input from 'src/components/input';
import { useSignup } from '../../hook';

type EmailSignupProps = ReturnType<typeof useSignup>;

function EmailSignup({ input, event, query, error }: EmailSignupProps) {
  const buttonStyle = useMemo<CSSProperties>(() => ({ width: 53, padding: '8px 8px', fontSize: 12 }), []);

  return (
    <Form
      onSubmit={event.onSubmit}
      style={{ marginBottom: 20 }}
      header={<h1 style={{ fontSize: 24 }}>본인 정보를 입력해주세요</h1>}
      content={[
        <Input
          disabled={query.identify.isSuccess}
          label="이메일"
          isError={error.isEmailError}
          errorMsg="이메일 인증을 진행해주세요."
          button={
            <Button
              type="button"
              text={query.identify.isLoading ? <LoadingOutlined /> : query.identify.isSuccess ? '재전송' : '인증'}
              style={buttonStyle}
              onClick={query.identify.mutate}
              disabled={query.confirm.isSuccess || !input.email.isValid}
            />
          }
          {...input.email}
        />,
        query.identify.isSuccess ? (
          <Input
            disabled={query.confirm.isSuccess}
            placeholder="전송된 코드를 입력해주세요."
            isError={query.confirm.isError}
            errorMsg="전송된 코드를 확인하고 다시 입력해주세요."
            button={
              <Button
                type="button"
                text={query.confirm.isLoading ? <LoadingOutlined /> : '확인'}
                style={buttonStyle}
                onClick={query.confirm.mutate}
                disabled={query.confirm.isSuccess}
              />
            }
            {...input.code}
          />
        ) : undefined,
        <Input
          type="password"
          label="비밀번호"
          isError={error.isPasswordError}
          errorMsg="비밀번호를 입력해주세요. (영문 숫자 8 ~ 30자)"
          {...input.password}
        />,
        <Input
          type="password"
          label="비밀번호 확인"
          isError={error.isPasswordCheckError}
          errorMsg="비밀번호가 일치하지 않습니다."
          {...input.passwordCheck}
        />,
      ]}
      footer={<Button text="회원가입" style={{ fontSize: 18 }} isLoading={query.signup.isLoading} />}
    />
  );
}

export default EmailSignup;
