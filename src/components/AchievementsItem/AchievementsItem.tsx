import { Box, Typography } from '@mui/material';

import { MountainsIcons } from '@/components';

import styles from './styles';
import useAchievementsItem from './useAchievementsItem';

import type { IAchievementsItemProps } from './types';

const AchievementsItem = ({ achievement }: IAchievementsItemProps) => {
  const { settings } = useAchievementsItem({ achievement });
  return (
    <Box sx={styles.root}>
      <Box sx={styles.imageContainer}>
        <MountainsIcons />
      </Box>
      <Box sx={styles.progressContainer}>
        <Box sx={styles.progressInfo}>
          <Typography sx={styles.title}>{settings.name}</Typography>
          <Typography sx={styles.percentage}>{settings.percentage}%</Typography>
        </Box>
        <Box sx={styles.progress}>
          {!!settings.percentage && <Box sx={styles.activeProgress(settings.percentage)} />}
          {!!settings.idlePercentage && <Box sx={styles.idleProgress(settings.idlePercentage)} />}
        </Box>
      </Box>
    </Box>
  );
};

export default AchievementsItem;
