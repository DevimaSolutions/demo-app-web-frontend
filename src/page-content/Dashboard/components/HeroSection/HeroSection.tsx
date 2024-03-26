import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { PlayIcon } from '@/components';
import dailyChallenge from '@/public/dailyChallenge.png';

import styles from './styles';

const HeroSection = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.imageContainer}>
        <Image src={dailyChallenge} fill alt="test" />
      </Box>
      <Box sx={styles.infoSection}>
        <Box>
          <Typography sx={styles.title}>Grid-based</Typography>
          <Typography sx={styles.subTitle}>Play & Win XP Booster</Typography>
        </Box>
        <Box sx={styles.playButton}>
          <PlayIcon sx={styles.icon} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
