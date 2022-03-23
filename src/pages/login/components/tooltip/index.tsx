import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesUrl } from 'src/constants/routesUrl';
import { LoginTooltipStyle } from './styles';

function LoginTooltip() {
  return (
    <LoginTooltipStyle.Wrapper>
      <div>로그인 상태 유지</div>
      <div>
        <Link to="">
          <span style={{ marginRight: 10 }}>비밀번호 재설정</span>
        </Link>
        <Link to={RoutesUrl.SIGNUP}>
          <span>회원가입</span>
        </Link>
      </div>
    </LoginTooltipStyle.Wrapper>
  );
}

export default LoginTooltip;
