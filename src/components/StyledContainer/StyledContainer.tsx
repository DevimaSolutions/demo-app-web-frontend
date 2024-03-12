import { Box } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';

import type { IStyledContainerProps } from './types';

const StyledContainer = ({ sx, children }: IStyledContainerProps) => {
  return <Box sx={combineSx(styles.root, sx)}>{children}</Box>;
};

export default StyledContainer;
