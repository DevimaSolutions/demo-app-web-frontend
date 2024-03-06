import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useCallback, useState } from 'react';

import { EyeCrossedIcon, EyeIcon, LockIcon } from '@/components/icons';
import { theme } from '@/constants';

import type { IPasswordInputProps } from './types';

function PasswordInput<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({ field, form: { touched, errors }, ...props }: IPasswordInputProps<V, FormValues>) {
  const [isPasswordShown, setPasswordShown] = useState(false);

  const onToggleShowPassword = useCallback(() => {
    setPasswordShown((val) => !val);
  }, []);

  const hasError = Boolean(touched[field.name] && errors[field.name]);

  const adornmentColor = hasError
    ? theme.palette.error.main
    : (field.value as string).length
    ? theme.palette.grey[300]
    : theme.palette.primary.main;

  return (
    <TextField
      {...field}
      {...props}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockIcon fill={adornmentColor} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="Toggle password visibility" onClick={onToggleShowPassword}>
              {isPasswordShown ? (
                <EyeIcon fill={theme.palette.primary.main} />
              ) : (
                <EyeCrossedIcon fill={theme.palette.primary.main} />
              )}
            </IconButton>
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      type={isPasswordShown ? 'text' : 'password'}
      error={hasError}
      helperText={hasError ? errors[field.name]?.toString() : ' '}
    />
  );
}

export default PasswordInput;
