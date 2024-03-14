import { TextField, InputAdornment, IconButton } from '@mui/material';

import { EyeCrossedIcon, EyeIcon, LockIcon } from '@/components/icons';
import { theme } from '@/constants';

import usePasswordInput from './usePasswordInput';

import type { IPasswordInputProps } from './types';

function PasswordInput<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({ field, ...props }: IPasswordInputProps<V, FormValues>) {
  const { onToggleShowPassword, isPasswordShown, hasError, errorText, adornmentColor } =
    usePasswordInput({ field, ...props });

  return (
    <TextField
      {...field}
      {...props}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockIcon width={20} height={20} fill={adornmentColor} />
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
      helperText={hasError ? errorText : ' '}
    />
  );
}

export default PasswordInput;
