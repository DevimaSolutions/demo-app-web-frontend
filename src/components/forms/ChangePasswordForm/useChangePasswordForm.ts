import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { successMessages } from '@/constants';
import { profileService } from '@/services';

import type { IChangePasswordFormData, IChangePasswordFormProps } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { AxiosError } from 'axios';
import type { FormikHelpers } from 'formik';

const useChangePasswordForm = ({ onSubmit }: IChangePasswordFormProps) => {
  const initialValues: IChangePasswordFormData = { password: '', confirmPassword: '' };

  const submitHandler = useCallback(
    (
      values: IChangePasswordFormData,
      { setErrors, setSubmitting }: FormikHelpers<IChangePasswordFormData>,
    ) => {
      profileService
        .updatePassword(values)
        .then(() => {
          onSubmit();
          toast(successMessages.passwordChanged);
        })
        .catch((error: AxiosError<IFormErrorResponse<IChangePasswordFormData>>) => {
          setErrors({
            ...error.response?.data?.errors,
          });
        })
        .finally(() => setSubmitting(false));
    },
    [onSubmit],
  );

  return { initialValues, submitHandler };
};

export default useChangePasswordForm;
