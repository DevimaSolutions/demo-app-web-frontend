import type ITabPanelProps from '../types';

export interface IAccountDetailProps extends ITabPanelProps {
  onChangePassword: () => void;
  onChangeName: () => void;
  onChangeUsername: () => void;
}
