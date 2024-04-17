import { buttonBaseClasses, typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [`& .${typographyClasses.h1}`]: {
      fontSize: 40,
      lineHeight: '48px',
      fontWeight: 600,
    },
  },
  headerWrapper: {
    display: 'flex',
    gap: 2.5,
    alignItems: 'center',
  },
  statsWrapper: {
    display: 'flex',
    gap: 1.5,
  },
  buttonsWrapper: {
    display: 'flex',
    gap: 1.5,
    [`& .${buttonBaseClasses.root}`]: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
      color: theme.palette.text.primary,
      padding: theme.spacing(1.375, 5.125),
      svg: {
        width: 16,
        height: 16,
        color: theme.palette.primary.main,
      },
    },
  },
} as const;

export default styles;
