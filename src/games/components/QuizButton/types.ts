import type { ButtonProps } from '@mui/material';

export interface IQuizButtonProps extends Omit<ButtonProps, 'onClick'> {
  answer: string;
}

export type IUseQuizButtonAnswer = Pick<IQuizButtonProps, 'answer'>;

export interface IQuizButtonStyleSettings {
  background: string;
  outlineColor?: string;
  borderColor?: string;
}
