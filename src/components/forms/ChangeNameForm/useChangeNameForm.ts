import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { successMessages } from '@/constants';
import { profileService } from '@/services';

import type { IChangeNameFormData, IChangeNameFormProps } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { FormikHelpers } from 'formik';

const useChangeNameForm = ({ name, onSubmit }: IChangeNameFormProps) => {
  const initialValues: IChangeNameFormData = { name: name };

  const submitHandler = useCallback(
    (
      values: IChangeNameFormData,
      { setErrors, setSubmitting }: FormikHelpers<IChangeNameFormData>,
    ) => {
      profileService
        .updateProfile(values)
        .then(() => {
          onSubmit();
          toast(successMessages.userFieldChanged('name'));
        })
        .catch((error: IFormErrorResponse<IChangeNameFormData>) => {
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

export default useChangeNameForm;
