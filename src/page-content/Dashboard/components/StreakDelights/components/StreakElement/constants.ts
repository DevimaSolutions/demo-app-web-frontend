import { theme } from '@/constants';
import activeImage from '@/public/assets/icons/active.png';
import disabledImage from '@/public/assets/icons/disabled.png';
import eliteImage from '@/public/assets/icons/elite.png';

import { StreakStatus } from './enums';

export const streakElementSettings = {
  [StreakStatus.Active]: {
    mainColor: theme.palette.primary[900],
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
