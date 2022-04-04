import { DownloadOutlined, MobileOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RoutesUrl } from 'src/constants/routesUrl';
import { selectDevice } from 'src/features/device/device.slice';
import { selectUser } from 'src/features/user/user.slice';
import { useHeader } from '../../hooks/header.hook';
import { StatusBarStyle } from './styles';

type StatusBarProps = ReturnType<typeof useHeader>;

function StatusBar({ query, state }: StatusBarProps) {
  return (
    <StatusBarStyle.Wrapper>
      <StatusBarStyle.Container>
        <StatusBarStyle.Status>
          <StatusBarStyle.Button>
            <DownloadOutlined /> 앱 다운로드
          </StatusBarStyle.Button>
          <StatusBarStyle.Button>
            <StarTwoTone twoToneColor={'#ffcd00'} /> 즐겨찾기
          </StatusBarStyle.Button>
        </StatusBarStyle.Status>
        <StatusBarStyle.Status>
          {!state.user.name ? (
            <>
              <Link to={RoutesUrl.LOGIN}>로그인</Link>
              <Link to={RoutesUrl.SIGNUP}>회원가입</Link>
            </>
          ) : (
            <>
              <StatusBarStyle.Button onClick={query.logout.mutate}>로그아웃</StatusBarStyle.Button>
              <StatusBarStyle.Button>알림</StatusBarStyle.Button>
              <Link to={RoutesUrl.MYPAGE}>내 상점</Link>
            </>
          )}
        </StatusBarStyle.Status>
      </StatusBarStyle.Container>
    </StatusBarStyle.Wrapper>
  );
}

export default StatusBar;
