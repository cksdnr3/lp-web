import { MobileOutlined, StarTwoTone } from '@ant-design/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RoutesUrl } from 'src/constants/routesUrl';
import { selectUser } from 'src/features/user/userSlice';
import { StatusBarStyle } from './styles';

function StatusBar() {
  const { name } = useSelector(selectUser);
  return (
    <StatusBarStyle.Wrapper>
      <StatusBarStyle.Container>
        <StatusBarStyle.Status>
          <div>앱 다운로드</div>
          <div>
            <StarTwoTone /> 즐겨찾기
          </div>
        </StatusBarStyle.Status>
        <StatusBarStyle.Status>
          {!name ? (
            <>
              <Link to={RoutesUrl.LOGIN}>로그인</Link>
              <Link to={RoutesUrl.SIGNUP}>회원가입</Link>
            </>
          ) : (
            <Link to="/a">알림</Link>
          )}
          <Link to={RoutesUrl.MYPAGE}>내 상점</Link>
        </StatusBarStyle.Status>
      </StatusBarStyle.Container>
    </StatusBarStyle.Wrapper>
  );
}

export default StatusBar;
