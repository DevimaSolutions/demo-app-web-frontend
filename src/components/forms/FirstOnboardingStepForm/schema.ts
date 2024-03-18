import { number, object, string } from 'yup';

export const schema = object()
  .shape({
    name: string().trim().required(),
    age: number().typeError('Age must be number').required(),
    gender: string().trim().required(),
  })
  .required();
