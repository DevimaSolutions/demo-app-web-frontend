import { object, string } from 'yup';

export const schema = object({
  name: string().trim().required().min(0).max(255),
}).required();
