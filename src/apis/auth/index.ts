import axios, { AxiosPromise } from 'axios';
import { IEmailIdentifyRequestBody, IEmailVerifyRequestBody, ILoginRequestBody } from './types';

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
    emailIdentify(body: IEmailIdentifyRequestBody) {
      // return axios.post();
    },
    emailVerify(body: IEmailVerifyRequestBody) {},
  };
}
