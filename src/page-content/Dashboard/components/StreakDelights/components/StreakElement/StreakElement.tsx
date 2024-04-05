import { Box } from '@mui/material';
import Image from 'next/image';

import { streakElementSettings } from './constants';
import styles from './styles';

import type { IStreakElementProps } from './types';

const StreakElement = ({ streak }: IStreakElementProps) => {
  const settings = streakElementSettings[streak.status];
  const elementStyles = styles(settings);
  return (
    <Box sx={elementStyles.root}>
      <Box sx={elementStyles.imageContainer}>
        <Image src={settings.image.src} width={75} height={75} alt="test" />
      </Box>
      <Box sx={elementStyles.nameContainer}>{streak.title}</Box>
      <Box sx={elementStyles.dayContainer}>Day {streak.dayNumber}</Box>
    </Box>
  );
};

export default StreakElement;
