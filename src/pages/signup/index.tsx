import Reract from 'react';
import EmailSignup from './components/email';
import SocialsSignup from '../../components/socials';
import SignupTooltip from './components/tooltip';
import { SignupStyle } from './styles';
import { useSignup } from './hook';

function Signup() {
  return (
    <SignupStyle.Wrapper>
      <SignupStyle.Container>
        <EmailSignup {...useSignup()} />
        <SocialsSignup types={['kakao', 'google', 'naver']} />
        <SignupTooltip />
      </SignupStyle.Container>
    </SignupStyle.Wrapper>
  );
}

export default Signup;
