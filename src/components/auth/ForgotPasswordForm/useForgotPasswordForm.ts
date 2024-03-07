import { useCallback } from 'react';

import { useDispatch } from '@/hooks';
import { sendForgotPassword } from '@/redux/authorization/thunks';

import type { IForgotPasswordFormProps } from './types';
import type { FormikHelpers } from 'formik';

const useForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
  };

  const forgotPasswordHandler = useCallback(
    (
      { email }: IForgotPasswordFormProps,
      { setErrors }: FormikHelpers<IForgotPasswordFormProps>,
    ) => {
      dispatch(sendForgotPassword(email))
        .unwrap()
        .catch((error) => {
          setErrors({
            email: error.response?.data?.message,
          });
        });
    },
    [dispatch],
  );
  return { forgotPasswordHandler, initialValues };
};

export default useForgotPasswordForm;
