import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import KakaoAuth from './pages/auth/kakao.auth';
import Login from './pages/login';
import Signup from './pages/signup';
import { RoutesUrl } from 'src/constants/routesUrl';
import Home from './pages/home';
import { token } from './utils/token';
import { useDispatch } from 'react-redux';
import { login, UserState } from './features/user/userSlice';
import Layout from './layout';
import jwtDecode from 'jwt-decode';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = token.getAccessToken();

    // if (accessToken) {
    //   const decoded = jwtDecode<UserState>(accessToken);
    //   dispatch(login({ name: decoded.name }));
    // }
  }, []);

  return (
    <Routes>
      <Route path={RoutesUrl.HOME} element={<Layout />}>
        <Route path={RoutesUrl.HOME} element={<Home />} />
      </Route>
      <Route path={RoutesUrl.LOGIN} element={<Login />} />
      <Route path={RoutesUrl.SIGNUP} element={<Signup />} />
      <Route path={RoutesUrl.KAKAO_AUTH} element={<KakaoAuth />} />
    </Routes>
  );
}

export default App;
