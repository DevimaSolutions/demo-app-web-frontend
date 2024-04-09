import { Box, CircularProgress, Typography } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';

import type { ILevelHalfCircleProps } from './types';
const LevelHalfCircle = ({ sx, xpProgress, level, children, ...rest }: ILevelHalfCircleProps) => {
  const xpInPercentage = xpProgress / 10 / 2; // get scaled(half) percentage of exp progress where 100% - 1000xp

  return (
    <Box sx={combineSx(styles.root, sx)} {...rest}>
      <CircularProgress
        variant="determinate"
        sx={styles.progressBg}
        value={50}
        size={48}
        thickness={8}
      />
      <CircularProgress
        variant="determinate"
        sx={styles.progress}
        value={xpInPercentage}
        size={44}
        thickness={4}
      />
      <Typography sx={styles.level}>{level}</Typography>
    </Box>
  );
};

export default LevelHalfCircle;
