import { Box, Tab, Tabs } from '@mui/material';

import styles from './styles';

import type { IRoundTabsGroupProps } from './types';

const RoundTabsGroup = <T,>({ options, value, onChange }: IRoundTabsGroupProps<T>) => {
  return (
    <Box>
      <Tabs
        value={value}
        onChange={onChange}
        aria-label="basic tabs example"
        sx={styles.root}
        TabIndicatorProps={{ sx: styles.indicator }}
      >
        {options.map((option, index) => {
          return (
            <Tab
              key={index}
              label={option.label}
              value={option.value}
              sx={styles.tab(option.disabled)}
              disabled={option.disabled}
              icon={option.endAdornment?.()}
              iconPosition="end"
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default RoundTabsGroup;
