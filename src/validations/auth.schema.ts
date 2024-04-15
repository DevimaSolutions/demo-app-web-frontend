import { object, ref, string } from 'yup';

import { PASSWORD_REGEX, validationMessages } from '@/constants';

export const emailSchema = object()
  .shape({
    email: string().trim().email().required(),
  })
  .required();

export const passwordSchema = object()
  .shape({
    password: string()
      .min(8)
      .max(64)
      .matches(PASSWORD_REGEX, validationMessages.password)
      .required()
      .trim(),
  })
  .required();

export const confirmPasswordSchema = object()
  .shape({
    confirmPassword: string()
      .oneOf([ref('password'), null], validationMessages.comparePassword)
      .required()
      .trim(),
  })
  .required();
