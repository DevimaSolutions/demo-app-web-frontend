export interface IRoundTabsGroupElement {
  label: string;
  value: string;
}

export interface IRoundTabsGroupProps {
  options: IRoundTabsGroupElement[];
  onChange: (event: React.ChangeEvent<{}>, newValue: string) => void;
  value: string;
}
