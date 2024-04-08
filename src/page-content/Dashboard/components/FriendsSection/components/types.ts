import type { BoxProps } from '@mui/material';

export default interface ITabPanelProps extends BoxProps {
  value: number;
  index: number;
}
