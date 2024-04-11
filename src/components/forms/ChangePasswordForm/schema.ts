import { object, ref, string } from 'yup';

import { PASSWORD_REGEX, validationMessages } from '@/constants';

export const schema = object({
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
}).required();
