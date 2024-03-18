import {
  AuthTypeEnum,
  type IResetPasswordRequest,
  type ISignUpRequest,
  type ISocialAuthorizeRequest,
} from '@/data-transfer/requests';
import { getAuthManager } from '@/utils';

import type {
  IFullUserResponse,
  ISuccessAuthorizeResponse,
  ISuccessResponse,
} from '@/data-transfer/responses';

const sendForgotPassword = async (email: string) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .post<ISuccessResponse>('/auth/password/forgot', { email })
    .then((res) => res.data);

  return response;
};

const authorizeWithSocial = async <AuthType>({
  payload,
  socialType,
}: ISocialAuthorizeRequest<AuthType>) => {
  const auth = await getAuthManager();

  const socialName = {
    [AuthTypeEnum.Google]: 'google',
    [AuthTypeEnum.LinkedIn]: 'linkedin',
  }[socialType];

  const authToken = await auth.axios
    .post<ISuccessAuthorizeResponse>(`/auth/${socialName}`, payload)
    .then((res) => res.data);

  const user = await auth.axios
    .get<IFullUserResponse>('/auth/profile', {
      headers: { Authorization: `Bearer ${authToken.accessToken}` },
    })
    .then((res) => res.data);

  auth.setAuth(user, authToken);
};

const resetPassword = async ({ token, password }: IResetPasswordRequest) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .put<ISuccessResponse>('/auth/password/reset', { token, password })
    .then((res) => res.data);

  return response;
};

const signUp = async (data: ISignUpRequest) => {
  const auth = await getAuthManager();

  const authToken = await auth.axios
    .post<ISuccessAuthorizeResponse>('/auth/sign-up', data)
    .then((res) => res.data);

  const user = await auth.axios
    .get<IFullUserResponse>('/auth/profile', {
      headers: { Authorization: `Bearer ${authToken.accessToken}` },
    })
    .then((res) => res.data);

  auth.setAuth(user, authToken);
};

const confirmEmail = async (code: string) => {
  const auth = await getAuthManager();

  await auth.axios.post<ISuccessResponse>('/auth/confirm/email', { code }).then((res) => res.data);

  const user = await auth.axios.get<IFullUserResponse>('/auth/profile').then((res) => res.data);

  auth.updateUser(user);
};

const resendEmailVerification = async () => {
  const auth = await getAuthManager();

  return auth.axios.post<ISuccessResponse>('/auth/confirm/email/resend').then((res) => res.data);
};

const authorizationService = {
  sendForgotPassword,
  authorizeWithSocial,
  resetPassword,
  signUp,
  confirmEmail,
  resendEmailVerification,
};
export default authorizationService;
