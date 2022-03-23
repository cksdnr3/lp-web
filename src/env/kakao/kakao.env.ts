import { RoutesUrl } from 'src/constants/routesUrl';

export namespace KakaoEnvironments {
  export const HOST = 'kauth.kakao.com';
  export const REST_API_KEY = '808564ed69ac2a31cca20beb8bf402c3';
  export const REDIRECT_URI = `http://localhost:3000${RoutesUrl.AUTH_CALLBACK}`;
  export const CLIENT_SECRET = 't9E4XngW7JuXdeJG6srhrYxebzSxatVE';
  export const api_url = {
    ME: '/v2/user/me',
  };
}
