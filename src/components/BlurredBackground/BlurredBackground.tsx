import { Box } from '@mui/material';

import styles from './styles';

import type { PropsWithChildren } from 'react';

const BlurredBackground = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.children}>{children}</Box>
    </Box>
  );
};

export default BlurredBackground;
