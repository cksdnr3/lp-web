import React from 'react';
import { Outlet } from 'react-router-dom';
import Tabs from '../components/tabs';
import { UserStyles } from './styles';

function User() {
  return (
    <UserStyles.Wrapper>
      <Tabs />
      <UserStyles.ActivityLayout>
        <Outlet />
      </UserStyles.ActivityLayout>
    </UserStyles.Wrapper>
  );
}

export default User;
