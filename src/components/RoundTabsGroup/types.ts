import type { ReactElement } from 'react';

export interface IRoundTabsGroupElement<T> {
  label: string;
  value: T;
  disabled?: boolean;
  endAdornment?: () => ReactElement;
}

export interface IRoundTabsGroupProps<T> {
  options: IRoundTabsGroupElement<T>[];
  onChange: (event: React.ChangeEvent<{}>, newValue: T) => void;
  value: T;
}
