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
      mb: 1,
    },
    [`& .${typographyClasses.caption}`]: {
      mb: 4,
    },
  },
} as const;

export default styles;
