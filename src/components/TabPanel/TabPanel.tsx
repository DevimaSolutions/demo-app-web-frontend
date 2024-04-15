import { Box } from '@mui/material';

import styles from './styles';

import type { TabPanelProps } from './types';

export const TabPanel = ({ children, value, index, ...rest }: TabPanelProps) => {
  return (
    <Box sx={styles.fullHeight} hidden={value !== index} {...rest}>
      {value === index && <Box sx={styles.fullHeight}>{children}</Box>}
    </Box>
  );
};

export default TabPanel;
