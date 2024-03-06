import type { AuthTypeEnum } from './enums';

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IGoogleAuthorizeRequest {
  token: string;
}

export interface ILinkedInAuthorizeRequest {
  code: string | string[];
  redirect: string;
}

export interface ISocialAuthorizeRequest<AuthType> {
  socialType: AuthTypeEnum;
  payload: AuthType extends AuthTypeEnum.Google
    ? IGoogleAuthorizeRequest
    : ILinkedInAuthorizeRequest;
}

export interface IResetPasswordRequest {
  token: string;
  password: string;
}
