import { AuthTypeEnum } from '@/data-transfer/requests/enums';
import { getAuthManager } from '@/utils';

import type { IResetPasswordRequest, ISocialAuthorizeRequest } from '@/data-transfer/requests';
import type {
  IFullUserResponse,
  IGoogleAuthorizeResponse,
  ISuccessResponse,
} from '@/data-transfer/responses';
import type { IVerifyAccountData } from '@/redux/authorization/types';

const sendForgotPassword = async (email: string) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .post<ISuccessResponse>('/auth/password/forgot', { email })
    .then((res) => res.data);

  return response;
};

const verifyAccount = async ({ verificationToken, password }: IVerifyAccountData) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .post<ISuccessResponse>('/auth/password/reset', {
      verificationToken,
      password,
    })
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
    .post<IGoogleAuthorizeResponse>(`/auth/${socialName}`, payload)
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

const authorizationService = {
  sendForgotPassword,
  verifyAccount,
  authorizeWithSocial,
  resetPassword,
};
export default authorizationService;
