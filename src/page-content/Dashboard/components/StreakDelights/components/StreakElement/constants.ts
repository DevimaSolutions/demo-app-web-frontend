import { theme } from '@/constants';
import activeImage from '@/public/streakIcons/active.png';
import disabledImage from '@/public/streakIcons/disabled.png';
import eliteImage from '@/public/streakIcons/elite.png';

import { StreakStatus } from './types';

export const streakElementSettings = {
  [StreakStatus.Active]: {
    mainColor: theme.palette.primary[700],
    mainTextColor: theme.palette.common.white,
    imageBackgroundColor: theme.palette.grey[600],
    dayContainerColor: theme.palette.common.white,
    dayContainerTextColor: theme.palette.grey[600],
    isDisabled: false,
    image: activeImage,
  },
  [StreakStatus.Disabled]: {
    mainColor: theme.palette.grey[200],
    mainTextColor: '#16141966',
    imageBackgroundColor: '#606166',
    dayContainerColor: theme.palette.grey[600],
    dayContainerTextColor: theme.palette.common.white,
    isDisabled: true,
    image: disabledImage,
  },
  [StreakStatus.Elite]: {
    mainColor: '#FEC943',
    mainTextColor: theme.palette.grey[600],
    imageBackgroundColor: '#dab148',
    dayContainerColor: theme.palette.grey[600],
    dayContainerTextColor: theme.palette.common.white,
    isDisabled: false,
    image: eliteImage,
  },
};
