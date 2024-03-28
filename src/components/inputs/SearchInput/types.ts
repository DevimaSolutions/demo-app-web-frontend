import type { TextFieldProps } from '@mui/material';

export interface ISearchInputProps extends Omit<TextFieldProps, 'onChange' | 'variant' | 'value'> {
  value?: string;
  onSearch: (searchValue: string) => void;
}
