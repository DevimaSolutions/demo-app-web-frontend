import type { TextFieldProps } from '@mui/material';

export interface ISearchInputProps extends Omit<TextFieldProps, 'onChange' | 'variant'> {
  initInputValue?: string;
  onSearch: (searchValue: string) => void;
}
