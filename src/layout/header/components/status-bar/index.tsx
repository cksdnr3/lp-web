import React, { useRef } from 'react';
import { CaretDownOutlined, DownloadOutlined, StarTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { RoutesUrl } from 'src/constants/routesUrl';
import { useHeader } from '../../hooks/header.hook';
import NotificationBox from '../notification-box';
import { StatusBarStyle } from './styles';
import { useClickOutside } from 'src/hooks/useClickOutside';

type StatusBarProps = ReturnType<typeof useHeader>;

function StatusBar({ query, state, event }: StatusBarProps) {
  const ref = useRef(null);
  useClickOutside(ref, event.onCloseNotification);
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
              <StatusBarStyle.Dropdown ref={ref} onClick={event.onToggleNotification}>
                <span>
                  알림 <CaretDownOutlined />
                </span>
                {state.notificationToggle && <NotificationBox />}
              </StatusBarStyle.Dropdown>
              <Link to={RoutesUrl.MYPAGE}>내 상점</Link>
            </>
          )}
        </StatusBarStyle.Status>
      </StatusBarStyle.Container>
    </StatusBarStyle.Wrapper>
  );
}

export default StatusBar;
