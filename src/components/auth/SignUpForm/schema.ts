import { object, string, ref } from 'yup';

import { PASSWORD_REGEX, validationMessages } from '@/constants';

export const schema = object()
  .shape({
    email: string().trim().email().required(),
    password: string()
      .min(8)
      .max(64)
      .matches(PASSWORD_REGEX, validationMessages.password)
      .required()
      .trim(),
    confirmPassword: string()
      .oneOf([ref('password'), null], validationMessages.comparePassword)
      .required()
      .trim(),
  })
  .required();
