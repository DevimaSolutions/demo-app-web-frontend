import { Box, Typography } from '@mui/material';

import { CoinIcon, RubiesIcon } from '@/components';

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
          <Box sx={styles.rubiesContainer}>
            315
            <RubiesIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Balance;
