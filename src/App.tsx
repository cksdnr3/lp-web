import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';
import Login from './pages/login';
import Signup from './pages/signup';
import { RoutesUrl } from 'src/constants/routesUrl';
import Home from './pages/home';
import { KakaoEnvironments } from './env/kakao/kakao.env';
import { token } from './utils/token';
import { useQuery } from 'react-query';

function App() {
  useQuery('/initialize', () => window.Kakao.isInitialized(), {
    onSuccess: async (isInitialized) => {
      if (!isInitialized) {
        await window.Kakao.init(KakaoEnvironments.REST_API_KEY);
        const accessToken = token.getAccessToken();
        if (accessToken !== null) {
          await window.Kakao.Auth.setAccessToken(accessToken);
        }
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useQuery('/me', () => window.Kakao.API.request({ url: KakaoEnvironments.api_url.ME }), {
    onSuccess: (response) => {
      console.log(response.kakao_account.profile);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <Routes>
      <Route path={RoutesUrl.HOME} element={<Home />} />
      <Route path={RoutesUrl.LOGIN} element={<Login />} />
      <Route path={RoutesUrl.SIGNUP} element={<Signup />} />
      <Route path={RoutesUrl.AUTH_CALLBACK} element={<Auth />} />
    </Routes>
  );
}

export default App;
