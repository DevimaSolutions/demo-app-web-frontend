import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { successMessages } from '@/constants';
import { useDispatch } from '@/hooks';
import { sendForgotPassword } from '@/redux/authorization';

import type { IForgotPasswordFormProps } from './types';
import type { FormikHelpers } from 'formik';
import type { ReactElement } from 'react';

const useForgotPasswordForm = (toastIcon: ReactElement) => {
  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState(0);

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
        .then(() => {
          toast.info(successMessages.emailSent(email), {
            icon: toastIcon,
          });
          setSeconds(60);
        })
        .catch((error) => {
          setErrors({
            email: error.response?.data?.message,
          });
        });
    },
    [dispatch, toastIcon],
  );

  useEffect(() => {
    if (Boolean(seconds)) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }, [seconds]);

  const resendProgress = useMemo(() => 60 - seconds, [seconds]);

  return { forgotPasswordHandler, initialValues, seconds, resendProgress };
};

export default useForgotPasswordForm;
