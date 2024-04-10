import { useCallback, useEffect, useState } from 'react';

import { useDispatch } from '@/hooks';
import { updateOnboardingData } from '@/redux/onboarding';
import { prevStep } from '@/redux/onboarding/slice';
import onboardingService from '@/services/onboarding.service';

import type { ISelectSkillsFormProps } from './types';
import type { IFormErrorResponse, ISoftSkillsObject } from '@/data-transfer/responses';
import type { AxiosError } from 'axios';
import type { FormikHelpers } from 'formik';

const useSelectSkillsForm = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState<ISoftSkillsObject[] | null>(null);

  const prev = useCallback(() => dispatch(prevStep()), [dispatch]);

  const initialValues: ISelectSkillsFormProps = { skills: [] };

  const submitHandler = useCallback(
    (
      values: ISelectSkillsFormProps,
      { setErrors, setSubmitting }: FormikHelpers<ISelectSkillsFormProps>,
    ) => {
      dispatch(updateOnboardingData({ fourthStep: { softSkills: values.skills } }))
        .unwrap()
        .catch((error: AxiosError<IFormErrorResponse<ISelectSkillsFormProps>>) => {
          setErrors({
            ...error.response?.data?.errors,
          });
        })
        .finally(() => setSubmitting(false));
    },
    [dispatch],
  );

  useEffect(() => {
    onboardingService.getSoftSkills().then((res) => setOptions(res));
  }, []);

  return { initialValues, submitHandler, prev, options };
};

export default useSelectSkillsForm;
