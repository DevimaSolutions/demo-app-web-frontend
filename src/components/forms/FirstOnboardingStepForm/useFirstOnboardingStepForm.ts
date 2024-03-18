import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { onboardingDataSelector } from '@/redux/onboarding/selectors';
import { updateOnboardingData } from '@/redux/onboarding/thunk';

import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { AxiosError } from 'axios';
import type { FormikHelpers } from 'formik';

const useFirstOnboardingStepForm = () => {
  const data = useSelector(onboardingDataSelector);
  const dispatch = useDispatch();

  const initialValues = {
    name: data?.firstStep.name ?? '',
    age: data?.firstStep.age ?? '',
    gender: data?.firstStep.gender ?? '',
  };

  const calculateProgress = (object: Record<string, string | number>) =>
    Object.values(object).filter((value) => !!value).length;

  const submitHandler = useCallback(
    (
      values: typeof initialValues,
      { setErrors, setSubmitting }: FormikHelpers<typeof initialValues>,
    ) => {
      dispatch(updateOnboardingData({ firstStep: { ...values, age: Number(values.age) } }))
        .unwrap()
        .catch((error: AxiosError<IFormErrorResponse<typeof initialValues>>) => {
          setErrors({
            ...error.response?.data?.errors,
          });
        })
        .finally(() => setSubmitting(false));
    },
    [dispatch],
  );

  return { calculateProgress, initialValues, submitHandler };
};

export default useFirstOnboardingStepForm;
