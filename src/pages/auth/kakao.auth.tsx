import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { KakaoEnvironments } from 'src/env/kakao/kakao.env';
import { useMutation, useQuery } from 'react-query';
import { token } from 'src/utils/token';
import { useDispatch } from 'react-redux';
import { authAPI } from 'src/apis/auth';
import { RoutesUrl } from 'src/constants/routesUrl';

function KakaoAuth() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  useQuery('/kakao_login', () => authAPI.post.kakaoLogin({ authorizationCode: query.code as string }), {
    onSuccess: (data) => {
      token.setAccessToken(data.data.accessToken);
      token.setRefreshToken(data.data.refreshToken);
      navigate(RoutesUrl.HOME);
    },
  });

  return <></>;
}

export default KakaoAuth;
