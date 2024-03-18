import type { SelectProps, SxProps } from '@mui/material';
import type { FieldProps } from 'formik';

export interface ISelectChipInputProps<
  V = string[],
  FormValues extends Record<string, unknown> = Record<string, unknown>,
> extends FieldProps<V, FormValues>,
    Omit<SelectProps, 'name' | 'value' | 'onChange' | 'onBlur'> {
  options: { id: string; name: string }[];
  max?: number;
  errorSx?: SxProps;
}
