import Reract, { useEffect } from 'react';
import EmailSignup from './components/email';
import SocialsSignup from '../../components/socials';
import SignupTooltip from './components/tooltip';
import { SignupStyle } from './styles';
import { useSignup } from './hook';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/features/user/userSlice';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const { name } = useSelector(selectUser);

  useEffect(() => {
    if (name) {
      navigate(-1);
    }
  }, [name]);
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
