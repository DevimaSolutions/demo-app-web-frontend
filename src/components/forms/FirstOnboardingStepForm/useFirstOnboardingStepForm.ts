import { useCallback, useMemo } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { thunks, selectors } from '@/redux/onboarding';

import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { AxiosError } from 'axios';
import type { FormikHelpers } from 'formik';

const useFirstOnboardingStepForm = () => {
  const data = useSelector(selectors.onboardingDataSelector);
  const dispatch = useDispatch();

  const initialValues = useMemo(
    () => ({
      name: data?.firstStep.name ?? '',
      age: data?.firstStep.age ?? '',
      gender: data?.firstStep.gender ?? '',
    }),
    [data?.firstStep],
  );

  const calculateProgress = (object: Record<string, string | number>) =>
    Object.values(object).filter((value) => !!value).length;

  const submitHandler = useCallback(
    (
      values: typeof initialValues,
      { setErrors, setSubmitting }: FormikHelpers<typeof initialValues>,
    ) => {
      dispatch(thunks.updateOnboardingData({ firstStep: { ...values, age: Number(values.age) } }))
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
