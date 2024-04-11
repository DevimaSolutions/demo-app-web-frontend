import { theme } from '@/constants';

import type { ITextInputProps } from './types';

const useTextInput = <
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({
  field,
  form: { touched, errors },
}: ITextInputProps<V, FormValues>) => {
  const hasError = Boolean(touched[field.name] && errors[field.name]);

  const errorText = errors[field.name]?.toString();

  const adornmentColor = hasError
    ? theme.palette.error.main
    : (field.value as string).length
    ? theme.palette.grey[300]
    : theme.palette.primary[900];

  return { hasError, errorText, adornmentColor };
};

export default useTextInput;
