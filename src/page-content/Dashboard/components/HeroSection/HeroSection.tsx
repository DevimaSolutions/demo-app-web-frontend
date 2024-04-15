import { Box, Button, Typography } from '@mui/material';
import { useCallback } from 'react';

import { RewardPlaceholderIcon } from '@/components';
import { gameService } from '@/services';

import { variants } from './constants';
import styles from './styles';

import type { IHeroSectionProps } from './types';

const HeroSection = ({ type }: IHeroSectionProps) => {
  const settings = variants[type];

  const playHandle = useCallback(async () => {
    await gameService.playGame();
  }, []);

  return (
    <Box sx={styles.root(settings.backgroundLink)}>
      <Typography sx={styles.title}>GAME OF THE DAY</Typography>
      <Typography sx={styles.gameName}>{settings.name}</Typography>
      <Box sx={styles.infoBlock}>
        <Typography sx={styles.infoBlockTitle}>Complete next level and get the reward!</Typography>
        <Box sx={styles.rewardBlock}>
          <Box sx={styles.rewardElement}>
            <RewardPlaceholderIcon />
            <Typography sx={styles.rewardText}>Reward #1</Typography>
          </Box>
          <Box sx={styles.rewardElement}>
            <RewardPlaceholderIcon />
            <Typography sx={styles.rewardText}>Reward #2</Typography>
          </Box>
        </Box>
        <Button variant="contained" onClick={playHandle} fullWidth sx={styles.playButton}>
          Play LVL. 3
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
