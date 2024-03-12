import type { ButtonProps } from '@mui/material/Button';
import type { ReactNode } from 'react';

export interface IFillingButtonProps extends Omit<ButtonProps, 'disabled'> {
  segments: number;
  progress: number;
  children: ReactNode;
}

export type IUseFillingButtonProps = Pick<IFillingButtonProps, 'progress' | 'segments'>;
