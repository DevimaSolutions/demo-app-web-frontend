import { paperClasses } from '@mui/material';

const styles = {
  root: {
    [`& .${paperClasses.root}`]: {
      height: 'unset',
      width: 359,
      maxHeight: 500,
    },
  },
  achievementsContainer: {
    width: '100%',
    my: 3,
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
    px: 3,
  },
} as const;

export default styles;
