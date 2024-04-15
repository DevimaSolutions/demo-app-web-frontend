export interface IChangeUsernameFormData {
  username: string;
}
export interface IChangeUsernameFormProps extends IChangeUsernameFormData {
  onSubmit: () => void;
}
