import { object, string } from 'yup';

import { emailSchema } from '@/validations';

export const schema = object({
  password: string().trim().required(),
})
  .concat(emailSchema)
  .required();
