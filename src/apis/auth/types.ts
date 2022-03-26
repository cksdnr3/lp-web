export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface ILoginResponseBody extends LoginResponse {}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IEmailIdentifyRequestBody {
  email: string;
}

export interface IEmailIdentifyResponseBody {}

export interface IEmailVerifyRequestBody {
  email: string;
  code: string;
}

export interface ISignupRequestBody {
  email: string;
  password: string;
}

export interface IKakaoLoginRequestBody {
  authorizationCode: string;
}

export interface IKakaoLoginResponseBody extends LoginResponse {}
