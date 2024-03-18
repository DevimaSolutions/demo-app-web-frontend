import { array, object, string } from 'yup';

export const schema = object({
  skills: array()
    .of(string().trim().required())
    .length(3, 'Please choose three options')
    .required(),
}).required();
