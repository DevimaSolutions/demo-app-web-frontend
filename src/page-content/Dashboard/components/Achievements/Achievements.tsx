import { Box, Button, Typography } from '@mui/material';

import { AchievementsItem, AchievementsModal } from '@/components';

import styles from './styles';
import useAchievements from './useAchievements';

import type { IAchievementsProps } from './types';

const Achievements = ({ achievements }: IAchievementsProps) => {
  const { isOpen, handleModal } = useAchievements();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Box sx={styles.titleBox}>
          <Typography sx={styles.title}>Achievements</Typography>
          <Typography sx={styles.achievementsCount}>
            <span>7</span>/43
          </Typography>
        </Box>
        <Button variant="contained" sx={styles.seeAllButton} onClick={handleModal}>
          SEE ALL
        </Button>
      </Box>
      <Box sx={styles.achievementsBox}>
        {achievements.slice(0, 2).map((achievement, idx) => (
          <AchievementsItem key={idx} achievement={achievement} />
        ))}
      </Box>
      <AchievementsModal achievements={achievements} open={isOpen} onClose={handleModal} />
    </Box>
  );
};

export default Achievements;
