import React from 'react';
import { Outlet } from 'react-router-dom';
import Profile from './components/profile';
import { UsersStyles } from './styles';

function Users() {
  return (
    <UsersStyles.Wrapper>
      <Profile />
      <Outlet />
    </UsersStyles.Wrapper>
  );
}

export default Users;
