import type { SxProps } from '@mui/material';
import type { VerificationInputProps } from 'react-verification-input';

export interface ICodeInputProps extends VerificationInputProps {
  sx?: SxProps;
  isError?: boolean;
}
