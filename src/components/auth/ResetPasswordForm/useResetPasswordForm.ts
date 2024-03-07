import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { errorMessages } from '@/constants';
import { authorizationService } from '@/services';

import type { IResetPasswordFormProps, IResetPasswordFormValues } from './types';
import type { FormikHelpers } from 'formik';

const useResetPasswordForm = ({ token }: IResetPasswordFormProps) => {
  const router = useRouter();
  const initialValues = {
    password: '',
    repeatPassword: '',
  };

  const resetPasswordHandler = useCallback(
    (
      { password }: IResetPasswordFormValues,
      { setSubmitting }: FormikHelpers<IResetPasswordFormValues>,
    ) => {
      authorizationService
        .resetPassword({ token, password })
        .then(() => {
          toast.success('Success!');
          router.push('/sign-in');
        })
        .catch((error) => {
          toast.error(error.response?.data?.message || errorMessages.somethingWentWrong);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
    [router, token],
  );

  return { initialValues, resetPasswordHandler };
};

export default useResetPasswordForm;