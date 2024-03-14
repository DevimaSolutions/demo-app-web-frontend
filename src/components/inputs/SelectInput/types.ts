import type { SelectProps } from '@mui/material';
import type { FieldProps } from 'formik';

export interface ISelectInputProps<
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
> extends FieldProps<V, FormValues>,
    Omit<SelectProps, 'name' | 'value' | 'onChange' | 'onBlur'> {
  options: V[];
}
