import { ACCESS_TOKEN } from 'src/constants/access.token';
import { REFRESH_TOKEN } from 'src/constants/refresh.toekn';

export const token = {
  isExistsAccessToken(): boolean {
    const token = localStorage.getItem(ACCESS_TOKEN);
    return token !== null;
  },

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  },

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN);
  },

  setAccessToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  },

  setRefreshToken(token: string): void {
    localStorage.setItem(REFRESH_TOKEN, token);
  },
};
