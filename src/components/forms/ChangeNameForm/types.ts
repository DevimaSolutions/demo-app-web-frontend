export interface IChangeNameFormData {
  name: string;
}
export interface IChangeNameFormProps extends IChangeNameFormData {
  onSubmit: () => void;
}
