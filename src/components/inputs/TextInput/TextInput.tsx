import { Box, TextField } from '@mui/material';

import useTextInput from './useTextInput';

import type { ITextInputProps } from './types';

function TextInput<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({ field, InputProps, ...props }: ITextInputProps<V, FormValues>) {
  const { hasError, errorText, adornmentColor } = useTextInput({ field, InputProps, ...props });

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
      helperText={hasError ? errorText : ' '}
    />
  );
}

export default TextInput;
