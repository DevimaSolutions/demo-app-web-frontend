import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { successMessages } from '@/constants';
import { useDispatch } from '@/hooks';
import { thunks } from '@/redux/profile';

import type { IChangeNameFormData, IChangeNameFormProps } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { FormikHelpers } from 'formik';

const useChangeNameForm = ({ name, onSubmit }: IChangeNameFormProps) => {
  const initialValues: IChangeNameFormData = { name: name };

  const dispatch = useDispatch();
  const submitHandler = useCallback(
    (
      values: IChangeNameFormData,
      { setErrors, setSubmitting }: FormikHelpers<IChangeNameFormData>,
    ) => {
      dispatch(thunks.updateProfile(values))
        .unwrap()
        .then(() => {
          onSubmit();
          toast(successMessages.fieldChanged('name'));
        })
        .catch((error: IFormErrorResponse<IChangeNameFormData>) => {
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

export default useChangeNameForm;
