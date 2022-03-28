import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import KakaoAuth from './pages/auth/kakao.auth';
import Login from './pages/login';
import Signup from './pages/signup';
import { RoutesUrl } from 'src/constants/routesUrl';
import Home from './pages/home';
import { token } from './utils/token';
import { useDispatch } from 'react-redux';
import { userActions, UserState } from './features/user/userSlice';
import Layout from './layout';
import jwtDecode from 'jwt-decode';
import MyPage from './pages/my-page';
import ProductsNew from './pages/products-new';
import Talk from './pages/talk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = token.getAccessToken();

    if (accessToken) {
      const decoded = jwtDecode<UserState>(accessToken);
      console.log(decoded);
      dispatch(userActions.login(decoded));
    }
  }, []);

  return (
    <Routes>
      <Route path={RoutesUrl.HOME} element={<Layout />}>
        <Route path={RoutesUrl.HOME} element={<Home />} />
        <Route path={RoutesUrl.MYPAGE} element={<MyPage />} />
        <Route path={RoutesUrl.PRODUCTS_NEW} element={<ProductsNew />} />
        <Route path={RoutesUrl.TALK} element={<Talk />} />
      </Route>
      <Route path={RoutesUrl.LOGIN} element={<Login />} />
      <Route path={RoutesUrl.SIGNUP} element={<Signup />} />
      <Route path={RoutesUrl.KAKAO_AUTH} element={<KakaoAuth />} />
    </Routes>
  );
}

export default App;
