import axios, { AxiosPromise } from 'axios';
import {
  IEmailIdentifyRequestBody,
  IEmailVerifyRequestBody,
  IKakaoLoginRequestBody,
  IKakaoLoginResponseBody,
  ILoginRequestBody,
  ISignupRequestBody,
} from './types';

export namespace authAPI {
  export const get = {
    login(params: { code: string }) {
      return axios.get('/login', { params });
    },
  };

  export const post = {
    login(body: ILoginRequestBody): AxiosPromise<void> {
      return axios.post('/login', body);
    },
    kakaoLogin(body: IKakaoLoginRequestBody) {
      return new Promise<IKakaoLoginResponseBody>((resolve, reject) => {
        resolve({ accessToken: '', refreshToken: 'rft' });
      });
    },
    emailIdentify(body: IEmailIdentifyRequestBody) {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
    codeVerify(body: IEmailVerifyRequestBody) {
      return new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
          if ('code' === body.code) {
            resolve(true);
          } else {
            reject(false);
          }
        }, 1000);
      });
    },
    signup(body: ISignupRequestBody) {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
  };
}
