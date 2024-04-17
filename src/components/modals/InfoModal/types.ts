import type { DialogProps } from '@mui/material';

export interface IInfoModalProps extends DialogProps {
  title: string;
  content: string;
  onClose: () => void;
}
