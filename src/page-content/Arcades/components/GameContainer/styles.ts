import { alpha, linearProgressClasses, typographyClasses } from '@mui/material';

import { theme } from '@/constants';

import { GameState } from './types';

const styles = {
  root: (state: GameState) => ({
    borderRadius: 1.6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...(state === GameState.Selected
      ? {
          background: 'linear-gradient(286.9deg, #4229B9 12.15%, #6A51E1 105.66%)',
          [`& .${typographyClasses.root}`]: {
            color: theme.palette.common.white,
            //height: '266px',
          },
        }
      : {
          background: theme.palette.common.white,
          //height: '178px',
        }),
  }),
  content: (state: GameState) => ({
    padding: theme.spacing(6, 0, 5, 5),
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    ...(state === GameState.Selected
      ? {
          justifyContent: 'space-between',
        }
      : {
          gap: 1.625,
          pt: 4,
        }),
  }),
  contentText: {
    width: 237,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    [`& .${typographyClasses.h1}`]: {
      fontSize: 32,
      lineHeight: '40px',
      fontWeight: 600,
    },
    [`& .${typographyClasses.body1}`]: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 400,
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  progressContainer: {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
  },
  progressInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [`& .${typographyClasses.body1}`]: {
      fontSize: 14,
      lineHeight: '17px',
      fontWeight: 400,
    },
  },
  progress: (state: GameState) => ({
    width: '100%',
    height: 4,
    [`& .${linearProgressClasses.root}`]: {
      borderRadius: 0.2,
      backgroundColor:
        state === GameState.Selected
          ? alpha(theme.palette.common.white, 0.4)
          : alpha(theme.palette.primary.main, 0.1),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0.2,
      backgroundColor:
        state === GameState.Selected ? theme.palette.common.white : theme.palette.success[500],
    },
  }),
  imageWrapper: (image: string, state: GameState) => ({
    // transform: 'rotate(9.16deg)',
    overflow: 'hidden',
    ...(state === GameState.Selected
      ? {
          //background: `url(${image})`,
          width: 364,
          height: '100%',
          //height: 266,
        }
      : {
          ...(state !== GameState.Default
            ? {
                // background: `url(${image}), rgba(106, 81, 225, 0.2)`,
                // backgroundBlendMode: 'luminosity',
                width: 300,
                height: 162,
                borderRadius: 0.8,
                mr: 1,
              }
            : {
                //background: `url(${image})`,
                width: 300,
                height: '100%',
              }),
          //height: 178,
        }),
    // backgroundSize: 'cover',
    position: 'relative',
    // backgroundRepeat: 'no-repeat',
  }),
  image: {
    position: 'absolute',
    top: 0,
    objectPosition: 'right top',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#6A51E1',
    opacity: 0.2,
  },
  infoIcon: (state: GameState) => ({
    ':hover': {
      cursor: 'pointer',
    },

    ...(state === GameState.Selected
      ? {
          color: alpha(theme.palette.common.white, 0.4),
          svg: {
            width: 24,
            height: 24,
          },
        }
      : {
          color: theme.palette.grey[200],
          svg: {
            width: 15,
            height: 15,
          },
        }),
  }),
} as const;

export default styles;
