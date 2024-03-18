import { Button } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';
import useFillingButton from './useFillingButton';

import type { IFillingButtonProps } from './types';

const FillingButton = ({
  children,
  progress,
  segments,
  disabled,
  sx,
  ...rest
}: IFillingButtonProps) => {
  const { isDisabled, progressBar } = useFillingButton({ segments, progress });

  return (
    <Button
      disabled={disabled || isDisabled}
      sx={combineSx(styles.root(progressBar), sx)}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default FillingButton;
