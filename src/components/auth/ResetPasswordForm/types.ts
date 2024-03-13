import type { ReactElement } from 'react';

export interface IResetPasswordFormValues {
  password: string;
  repeatPassword: string;
}

export interface IResetPasswordFormProps {
  token: string;
}

export interface IUseResetPasswordFormProps extends IResetPasswordFormProps {
  toastIcon: ReactElement;
}
