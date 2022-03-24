import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { KakaoEnvironments } from 'src/env/kakao/kakao.env';
import { useQuery } from 'react-query';
import { KakaoAPI } from 'src/apis/kakao';
import { token } from 'src/utils/token';
import { useDispatch } from 'react-redux';

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  useQuery(['/kakaoToken'], () => KakaoAPI.post.kakaoToken({ authorizationCode: query.code as string }), {
    onSuccess: (data) => {
      token.setAccessToken(data.data.access_token);
      token.setRefreshToken(data.data.refresh_token);
      window.Kakao.cleanup();
      window.Kakao.init(KakaoEnvironments.REST_API_KEY);
      window.Kakao.Auth.setAccessToken(data.data.access_token);
      navigate('/');
    },
  });
  return <></>;
}

export default Auth;
