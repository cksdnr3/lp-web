import React from 'react';
import { useQuery } from 'react-query';
import { Outlet, useParams } from 'react-router-dom';
import { ProductsApi } from 'src/apis/products';
import Products from 'src/components/products';
import { RoutesUrl } from 'src/constants/routesUrl';
import Tabs from '../tabs';
import { UserStyles } from './styles';

function User() {
  return (
    <UserStyles.Wrapper>
      <Tabs />
      <Outlet />
    </UserStyles.Wrapper>
  );
}

export default User;
