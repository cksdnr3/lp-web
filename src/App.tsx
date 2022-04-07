import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import KakaoAuth from './pages/auth/kakao.auth';
import Login from './pages/login';
import Signup from './pages/signup';
import { RoutesUrl } from 'src/constants/routesUrl';
import Home from './pages/home';
import { token } from './utils/token';
import { useDispatch } from 'react-redux';
import { userActions, UserState } from './features/user/user.slice';
import Layout from './layout';
import jwtDecode from 'jwt-decode';
import Users from './pages/users';
import ProductsNew from './pages/products-new';
import Talk from './pages/talk';
import { deviceActions } from './features/device/device.slice';
import { ThemeContext } from 'styled-components';
import Products from './pages/products';
import User from './pages/users/:id';
import ActivityProducts from './pages/users/:id/products';
import ActivityComments from './pages/users/:id/comments';
import ActivityLikes from './pages/users/:id/likes';
import ActivityFollowers from './pages/users/:id/followers';
import ActivityFollowings from './pages/users/:id/followings';
import ActivityReviews from './pages/users/:id/reviews';

function App() {
  const dispatch = useDispatch();
  const { sizes } = useContext(ThemeContext);

  useEffect(() => {
    const accessToken = token.getAccessToken();

    if (accessToken) {
      const decoded = jwtDecode<UserState>(accessToken);

      dispatch(userActions.login(decoded));
    }
  }, []);

  useEffect(() => {
    const device = window.innerWidth > sizes.medium ? 'large' : window.innerWidth > sizes.small ? 'medium' : 'small';

    dispatch(deviceActions.setDevice({ device }));
    const resize = () => {
      const device = window.innerWidth > sizes.medium ? 'large' : window.innerWidth > sizes.small ? 'medium' : 'small';
      dispatch(deviceActions.setDevice({ device }));
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <Routes>
      <Route path={RoutesUrl.HOME} element={<Layout />}>
        <Route path={RoutesUrl.HOME} element={<Home />} />
        <Route path={RoutesUrl.USERS} element={<Users />}>
          <Route path={':id'} element={<User />}>
            <Route path={'products'} element={<ActivityProducts />} />
            <Route path={'comments'} element={<ActivityComments />} />
            <Route path={'likes'} element={<ActivityLikes />} />
            <Route path={'reviews'} element={<ActivityReviews />} />
            <Route path={'followings'} element={<ActivityFollowings />} />
            <Route path={'followers'} element={<ActivityFollowers />} />
          </Route>
        </Route>
        <Route path={RoutesUrl.MYPAGE} />
        <Route path={''} element={<ProductsNew />} />
        <Route path={RoutesUrl.TALK} element={<Talk />} />
        <Route path={RoutesUrl.PRODUCTS} element={<Products />} />
      </Route>
      <Route path={RoutesUrl.LOGIN} element={<Login />} />
      <Route path={RoutesUrl.SIGNUP} element={<Signup />} />
      <Route path={RoutesUrl.KAKAO_AUTH} element={<KakaoAuth />} />
    </Routes>
  );
}

export default App;
