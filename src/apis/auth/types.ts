export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface IEmailIdentifyRequestBody {
  email: string;
}

export interface IEmailIdentifyResponseBody {
  code: string;
}

export interface IEmailVerifyRequestBody {
  email: string;
  code: string;
}
