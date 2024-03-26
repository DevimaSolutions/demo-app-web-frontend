import { Box, Typography } from '@mui/material';

import { CoinIcon, RubinsIcon } from '@/components';

import styles from './styles';

const Balance = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.content}>
        <Typography sx={styles.title}>Balance</Typography>
        <Box sx={styles.coinsBox}>
          <Box sx={styles.coinsContainer}>
            12,150
            <CoinIcon />
          </Box>
          <Box sx={styles.rubinsContainer}>
            315
            <RubinsIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Balance;
