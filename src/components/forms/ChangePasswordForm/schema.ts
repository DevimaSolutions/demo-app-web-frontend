import { object } from 'yup';

import { confirmPasswordSchema, passwordSchema } from '@/validations';

export const schema = object().concat(passwordSchema).concat(confirmPasswordSchema).required();
