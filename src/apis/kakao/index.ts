import axios, { AxiosPromise } from 'axios';
import { KakaoEnvironments } from 'src/env/kakao/kakao.env';
import { IKakaoTokenRequestBody, IKakaoTokenResponseBody } from './types';
import qs from 'qs';

export namespace KakaoAPI {
  export const post = {
    kakaoToken(body: IKakaoTokenRequestBody): AxiosPromise<IKakaoTokenResponseBody> {
      const payload = qs.stringify({
        grant_type: 'authorization_code',
        client_id: KakaoEnvironments.REST_API_KEY,
        redirect_uri: KakaoEnvironments.REDIRECT_URI,
        code: body.authorizationCode,
        client_secret: KakaoEnvironments.CLIENT_SECRET,
      });
      return axios.post(`https://${KakaoEnvironments.HOST}/oauth/token`, payload);
    },
  };

  export const get = {
    kakaoLogin(): AxiosPromise<void> {
      return axios(`https://${KakaoEnvironments.HOST}/oauth/authorize`, {
        params: {
          client_id: KakaoEnvironments.REST_API_KEY,
          redirect_uri: KakaoEnvironments.REDIRECT_URI,
          response_type: 'code',
        },
      });
    },
  };
}
