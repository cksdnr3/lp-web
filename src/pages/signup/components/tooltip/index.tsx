import React from 'react';
import { Link } from 'react-router-dom';
import { SignupTooltipStyle } from './styles';

function SignupTooltip() {
  return (
    <SignupTooltipStyle.Tooltip>
      이미 계정이 있으신가요? <Link to="/login">로그인</Link>
    </SignupTooltipStyle.Tooltip>
  );
}

export default SignupTooltip;
