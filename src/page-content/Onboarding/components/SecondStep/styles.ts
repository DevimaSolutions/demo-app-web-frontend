import { typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    width: 480,
    height: 'auto',
    padding: theme.spacing(6, 5),
    textAlign: 'center',
    gap: 0,
    [`& .${typographyClasses.h2}`]: {
      fontSize: 24,
      mb: 4.25,
    },
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    mb: 6.25,
  },
  navButtons: {
    width: '100%',
    display: 'flex',
    gap: 3,
  },
} as const;

export default styles;
