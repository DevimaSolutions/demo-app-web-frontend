import { object, string, ref } from 'yup';

import { PASSWORD_REGEX, validationMessages } from '@/constants';

export const schema = object()
  .shape({
    password: string()
      .min(8)
      .max(64)
      .matches(PASSWORD_REGEX, validationMessages.password)
      .required()
      .trim(),
    repeatPassword: string()
      .oneOf([ref('password'), null], validationMessages.comparePassword)
      .required()
      .trim(),
  })
  .required();
