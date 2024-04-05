import { useCallback } from 'react';

import { firebaseAuthService } from '@/services';
import { getAuthManager } from '@/utils';

import type { IEmailSignInFormProps } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { AxiosError } from 'axios';
import type { FormikHelpers } from 'formik';

const useEmailSignInForm = () => {
  const signInHandler = useCallback(
    (
      { email, password }: IEmailSignInFormProps,
      { setErrors }: FormikHelpers<IEmailSignInFormProps>,
    ) =>
      getAuthManager()
        .then(async (auth) => {
          await auth.signIn({ email, password });
          await firebaseAuthService.authorizeUser();
        })
        .catch((error: AxiosError<IFormErrorResponse<IEmailSignInFormProps>>) => {
          setErrors({
            email: ' ',
            password: error.response?.data?.message,
            ...error.response?.data?.errors,
          });
        }),
    [],
  );

  return signInHandler;
};

export default useEmailSignInForm;
