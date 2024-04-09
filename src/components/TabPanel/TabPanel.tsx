import { Box } from '@mui/material';

import type { TabPanelProps } from './types';

export const TabPanel = ({ children, value, index, ...rest }: TabPanelProps) => {
  return (
    <Box hidden={value !== index} {...rest}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

export default TabPanel;
