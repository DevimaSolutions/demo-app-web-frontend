import { Box } from '@mui/material';

import { EnergySimpleIcon, LongArrowIcon, PlusIcon, RubinsSimpleIcon } from '@/components';

import styles from './styles';

const BalanceSection = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.sectionBox}>
        <Box sx={styles.iconContainer('#FC3952')}>
          <RubinsSimpleIcon />
        </Box>
        <Box sx={styles.innerBox}>
          {/* TODO: Change to real data */}
          315
          <Box sx={styles.actionButton}>
            <PlusIcon />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.sectionBox}>
        <Box sx={styles.iconContainer('#FEC943')}>
          <EnergySimpleIcon />
        </Box>
        <Box sx={styles.innerBox}>
          {/* TODO: Change to real data */}2
          <Box sx={styles.actionButton}>
            <LongArrowIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BalanceSection;
