import axios from 'axios';

export namespace authAPI {
  export const post = {
    login(body: { email: string; password: string }) {
      return axios.post('/login', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  };
}
