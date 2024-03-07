import { useCallback, useState } from 'react';

import { theme } from '@/constants';

import type { IPasswordInputProps } from './types';

const usePasswordInput = <
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({
  field,
  form: { touched, errors },
}: IPasswordInputProps<V, FormValues>) => {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const onToggleShowPassword = useCallback(() => {
    setPasswordShown((val) => !val);
  }, []);

  const hasError = Boolean(touched[field.name] && errors[field.name]);

  const errorText = errors[field.name]?.toString();

  const adornmentColor = hasError
    ? theme.palette.error.main
    : (field.value as string).length
    ? theme.palette.grey[300]
    : theme.palette.primary.main;

  return { onToggleShowPassword, isPasswordShown, hasError, errorText, adornmentColor };
};

export default usePasswordInput;
