import React from 'react';
import { LoginStyles } from './styles';
import Divider from 'src/components/divider';
import SocialsLogin from 'src/components/socials';
import useLogin from './hook';
import EmailLogin from './components/email';
import LoginTooltip from './components/tooltip';

function Login() {
  return (
    <LoginStyles.Wrapper>
      <LoginStyles.Container>
        <EmailLogin {...useLogin()} />
        <LoginTooltip />
        <Divider />
        <SocialsLogin />
      </LoginStyles.Container>
    </LoginStyles.Wrapper>
  );
}

export default Login;
