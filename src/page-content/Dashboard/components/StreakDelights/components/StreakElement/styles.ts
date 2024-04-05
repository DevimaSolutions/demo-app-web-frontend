import type { IStreakElementSettings } from './types';

const styles = (settings: IStreakElementSettings) =>
  ({
    root: {
      width: 110,
      height: 120,
      background: settings.mainColor,
      borderRadius: 1.2,
      p: '3px',
      position: 'relative',
      overflow: 'hidden',
      opacity: settings.isDisabled ? 0.6 : 1,
    },
    imageContainer: {
      width: '100%',
      height: 113,
      background: settings.imageBackgroundColor,
      borderRadius: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ['img']: {
        mixBlendMode: 'lighten',
      },
    },
    nameContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 'calc(100% - 28px)',
      background: settings.mainColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
      lineHEight: '23px',
      fontWeight: 700,
      color: settings.mainTextColor,
    },
    dayContainer: {
      position: 'absolute',
      top: 6,
      left: 6,
      right: 6,
      bottom: 90,
      background: settings.dayContainerColor,
      borderRadius: '10px 10px 4px 4px',
      fontSize: 12,
      lineHEight: '14px',
      fontWeight: 700,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: settings.dayContainerTextColor,
    },
  } as const);

export default styles;
