import axios, { AxiosPromise } from 'axios';
import { RoutesUrl } from 'src/constants/routesUrl';
import {
  IEmailIdentifyRequestBody,
  IEmailVerifyRequestBody,
  IKakaoLoginRequestBody,
  IKakaoLoginResponseBody,
  ILoginRequestBody,
  ILoginResponseBody,
  ILogoutRequestBody,
  ISignupRequestBody,
} from './types';

export namespace authAPI {
  export const get = {
    login(params: { code: string }) {
      return axios.get('/login', { params });
    },
  };

  export const post = {
    login(body: ILoginRequestBody): AxiosPromise<ILoginResponseBody> {
      return axios.post('/login', body);
    },
    kakaoLogin(body: IKakaoLoginRequestBody): AxiosPromise<IKakaoLoginResponseBody> {
      return axios.get(`${RoutesUrl.KAKAO_AUTH}`, { params: { code: body.authorizationCode } });
    },
    emailIdentify(body: IEmailIdentifyRequestBody): AxiosPromise<void> {
      return axios.post('/auth/email', body);
    },
    emailConfirm(body: IEmailVerifyRequestBody): AxiosPromise<void> {
      return axios.post('/auth/email/confirm', body);
    },
    create(body: ISignupRequestBody) {
      return axios.post('/auth/create', body);
    },
    logout(body: ILogoutRequestBody) {
      return new Promise<void>((resolve, reject) => {
        resolve();
      });
    },
  };
}
