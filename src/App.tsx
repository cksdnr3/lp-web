import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';
import Login from './pages/login';
import Signup from './pages/signup';
import { RoutesUrl } from 'src/constants/routesUrl';
import Home from './pages/home';
import { KakaoEnvironments } from './env/kakao/kakao.env';
import { token } from './utils/token';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import Detail from './pages/detail';
import Layout from './layout';

function App() {
  // const { loginType } = useSelector(selectUser);
  // useQuery('/initialize', () => window.Kakao.isInitialized(), {
  //   onSuccess: async (isInitialized) => {
  //     if (!isInitialized) {
  //       await window.Kakao.init(KakaoEnvironments.REST_API_KEY);
  //       const accessToken = token.getAccessToken();
  //       if (accessToken !== null) {
  //         await window.Kakao.Auth.setAccessToken(accessToken);
  //       }
  //     }
  //   },
  //   onError: console.log,
  // });
  // useQuery('/me', () => window.Kakao.API.request({ url: KakaoEnvironments.api_url.ME }), {
  //   onSuccess: (response) => {
  //     console.log(response.kakao_account.profile);
  //   },
  //   onError: console.log,
  // });

  return (
    <Routes>
      <Route path={RoutesUrl.HOME} element={<Layout />}>
        <Route path={RoutesUrl.HOME} element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
      <Route path={RoutesUrl.LOGIN} element={<Login />} />
      <Route path={RoutesUrl.SIGNUP} element={<Signup />} />
      <Route path={RoutesUrl.AUTH_CALLBACK} element={<Auth />} />
    </Routes>
  );
}

export default App;
