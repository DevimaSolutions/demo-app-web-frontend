import { Box, Tab, Tabs } from '@mui/material';

import styles from './styles';

import type { IRoundTabsGroupProps } from './types';

const RoundTabsGroup = ({ options, value, onChange }: IRoundTabsGroupProps) => {
  return (
    <Box>
      <Tabs
        value={value}
        onChange={onChange}
        aria-label="basic tabs example"
        sx={styles.root}
        TabIndicatorProps={{ sx: styles.indicator }}
      >
        {options.map((option) => (
          <Tab key={option.value} label={option.label} value={option.value} sx={styles.tab} />
        ))}
      </Tabs>
    </Box>
  );
};

export default RoundTabsGroup;
