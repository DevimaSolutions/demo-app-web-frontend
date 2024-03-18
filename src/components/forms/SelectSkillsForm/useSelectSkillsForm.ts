import { useCallback } from 'react';

import { useDispatch } from '@/hooks';
import { prevStep } from '@/redux/onboarding/slice';

import type { ISelectSkillsFormProps } from './types';

const useSelectSkillsForm = () => {
  //////// Just for example //////////
  const dispatch = useDispatch();

  const prev = useCallback(() => dispatch(prevStep()), [dispatch]);
  ////////////////////////////////////

  const initialValues: ISelectSkillsFormProps = { skills: [] };

  const handleSubmit = useCallback(({ skills }: ISelectSkillsFormProps) => {
    console.log('success ', skills);
  }, []);

  const handleReturn = useCallback(() => prev(), [prev]);

  return { initialValues, handleSubmit, handleReturn };
};

export default useSelectSkillsForm;
