import { object, string } from 'yup';

import { USERNAME_REGEX, validationMessages } from '@/constants';

export const schema = object({
  username: string()
    .trim()
    .required()
    .min(0)
    .max(255)
    .matches(USERNAME_REGEX, validationMessages.username),
}).required();
