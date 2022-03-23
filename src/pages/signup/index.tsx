import Reract from 'react';
import EmailSignup from './components/email';
import SocialsSignup from '../../components/socials';
import SignupTooltip from './components/tooltip';
import { SignupStyle } from './styles';

function Signup() {
  return (
    <SignupStyle.Wrapper>
      <SignupStyle.Container>
        <EmailSignup />
        <SocialsSignup />
        <SignupTooltip />
      </SignupStyle.Container>
    </SignupStyle.Wrapper>
  );
}

export default Signup;
