import React from 'react';
import { Outlet } from 'react-router-dom';
import Profile from './components/profile';
import { MypageStyles } from './styles';

function MyPage() {
  return (
    <MypageStyles.Wrapper>
      <Profile />
      <Outlet />
    </MypageStyles.Wrapper>
  );
}

export default MyPage;
