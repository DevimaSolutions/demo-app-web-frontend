import { useCallback } from 'react';

import { authorizationService } from '@/services';

import type { IForgotPasswordValues } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { AxiosError } from 'axios';
import type { FormikHelpers } from 'formik';

const useSignUpForm = () => {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const signUpHandler = useCallback(
    (
      values: IForgotPasswordValues,
      { setErrors, setSubmitting }: FormikHelpers<IForgotPasswordValues>,
    ) => {
      authorizationService
        .signUp(values)
        .catch((error: AxiosError<IFormErrorResponse<IForgotPasswordValues>>) => {
          setErrors({
            ...error.response?.data?.errors,
          });
        })
        .finally(() => setSubmitting(false));
    },
    [],
  );

  return { initialValues, signUpHandler };
};

export default useSignUpForm;
