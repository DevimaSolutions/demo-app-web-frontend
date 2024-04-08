import type { BoxProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface TabPanelProps extends BoxProps {
  children?: ReactNode;
  index: number;
  value: number;
}
