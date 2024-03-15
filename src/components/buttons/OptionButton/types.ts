import type { ButtonProps } from '@mui/material/Button';

export interface IOptionButtonProps extends Omit<ButtonProps, 'children' | 'variant' | 'color'> {
  icon: string;
  title: string;
  subtitle?: string;
  selected: boolean;
}
