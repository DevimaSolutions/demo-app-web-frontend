import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { successMessages } from '@/constants';
import { useDispatch } from '@/hooks';
import { thunks } from '@/redux/profile';

import type { IChangeUsernameFormData, IChangeUsernameFormProps } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { FormikHelpers } from 'formik';

const useChangeUsernameForm = ({ username, onSubmit }: IChangeUsernameFormProps) => {
  const initialValues: IChangeUsernameFormData = { username: username };

  const dispatch = useDispatch();
  const submitHandler = useCallback(
    (
      values: IChangeUsernameFormData,
      { setErrors, setSubmitting }: FormikHelpers<IChangeUsernameFormData>,
    ) => {
      dispatch(thunks.updateProfile(values))
        .unwrap()
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
    [onSubmit, dispatch],
  );

  return { initialValues, submitHandler };
};

export default useChangeUsernameForm;
