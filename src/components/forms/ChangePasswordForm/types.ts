export interface IChangePasswordFormData {
  password: string;
  confirmPassword: string;
}
export interface IChangePasswordFormProps {
  onSubmit: () => void;
}
