import { Box, LinearProgress, Typography } from '@mui/material';

import styles from './styles';

import type IXPSectionProps from './types';

const XPSection = ({ level, xpPoints }: IXPSectionProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.mainInfo}>
        {/*You’re on a way to this level*/}
        <Typography sx={styles.xpStats}>lvl. {level + 1}</Typography>
        <Typography sx={styles.xpStats}>
          {xpPoints}
          <span>/1000 XP</span>
        </Typography>
      </Box>
      <Box sx={styles.progressContainer}>
        <LinearProgress variant="determinate" value={xpPoints / 10} sx={styles.progress} />
      </Box>
    </Box>
  );
};

export default XPSection;
