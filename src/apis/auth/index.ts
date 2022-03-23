import axios, { AxiosPromise } from 'axios';
import { ILoginRequestBody } from './types';

export namespace authAPI {
  export const post = {
    login(body: ILoginRequestBody): AxiosPromise<void> {
      return axios.post('/login', body);
    },
  };
}
