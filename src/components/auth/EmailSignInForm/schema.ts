import { object, string } from 'yup';

export const schema = object({
  email: string().trim().email().required(),
  password: string().trim().required(),
}).required();
