import { number, object, string } from 'yup';

export const schema = object()
  .shape({
    name: string().trim().required('User name is a required field').min(0).max(255),
    age: number().typeError('Age must be number').required().positive().min(0).max(150),
    gender: string().trim().required(),
  })
  .required();
