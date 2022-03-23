export interface IKakaoTokenResponseBody {
  id_token: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export interface IKakaoTokenRequestBody {
  authorizationCode: string;
}
