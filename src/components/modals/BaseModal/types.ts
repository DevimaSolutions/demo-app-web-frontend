import type { DialogProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface IBaseModalProps extends DialogProps {
  title?: string;
  children: ReactNode;
  onClose: () => void;
}
