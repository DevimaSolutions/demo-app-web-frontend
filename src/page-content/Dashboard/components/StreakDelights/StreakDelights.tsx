import { Box, Typography } from '@mui/material';

import { StreakElement } from './components';
import { streaks } from './constants';
import styles from './styles';

const StreakDelights = () => {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>Streak Delights</Typography>
      <Box sx={styles.streakContainer}>
        {streaks.map((streak, idx) => (
          <StreakElement streak={streak} key={idx} />
        ))}
      </Box>
    </Box>
  );
};

export default StreakDelights;
