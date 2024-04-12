import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { successMessages } from '@/constants';
import { profileService } from '@/services';

import type { IChangeUsernameFormData, IChangeUsernameFormProps } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { FormikHelpers } from 'formik';

const useChangeUsernameForm = ({ username, onSubmit }: IChangeUsernameFormProps) => {
  const initialValues: IChangeUsernameFormData = { username: username };

  const submitHandler = useCallback(
    (
      values: IChangeUsernameFormData,
      { setErrors, setSubmitting }: FormikHelpers<IChangeUsernameFormData>,
    ) => {
      profileService
        .updateProfile(values)
        .then(() => {
          onSubmit();
          toast(successMessages.fieldChanged('username'));
        })
        .catch((error: IFormErrorResponse<IChangeUsernameFormData>) => {
          setErrors({
            ...error.errors,
          });
        })
        .finally(() => setSubmitting(false));
    },
    [onSubmit],
  );

  return { initialValues, submitHandler };
};

export default useChangeUsernameForm;
