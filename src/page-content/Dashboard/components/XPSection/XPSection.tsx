import { Box, LinearProgress, Typography } from '@mui/material';

import styles from './styles';

const XPSection = () => {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>You’re on a way to</Typography>
      <Box sx={styles.mainInfo}>
        <Typography sx={styles.xpStats}>lvl. 18</Typography>
        <Typography sx={styles.xpStats}>
          515<span>/600 XP</span>
        </Typography>
      </Box>
      <Box sx={styles.progressContainer}>
        <LinearProgress variant="determinate" value={60} sx={styles.progress} />
      </Box>
    </Box>
  );
};

export default XPSection;
