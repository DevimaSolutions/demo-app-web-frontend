import { Box, TextField } from '@mui/material';

import { theme } from '@/constants';

import type { ITextInputProps } from './types';

function TextInput<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({ field, form: { touched, errors }, InputProps, ...props }: ITextInputProps<V, FormValues>) {
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
      InputProps={
        InputProps
          ? {
              ...InputProps,
              startAdornment: <Box color={adornmentColor}>{InputProps.startAdornment}</Box>,
            }
          : {}
      }
      error={hasError}
      helperText={hasError ? errors[field.name]?.toString() : ' '}
    />
  );
}

export default TextInput;
