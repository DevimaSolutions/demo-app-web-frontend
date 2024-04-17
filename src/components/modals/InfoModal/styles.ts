import {
  buttonBaseClasses,
  dialogContentClasses,
  dialogTitleClasses,
  paperClasses,
} from '@mui/material';

import { theme } from '@/constants';

const styles = {
  dialog: {
    [`& .${dialogContentClasses.root}`]: {
      padding: 3,
      borderRadius: 2.4,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },
    [`& .${dialogTitleClasses.root}`]: {
      p: 0,
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [`& .${buttonBaseClasses.root}`]: {
        color: theme.palette.grey[200],
        padding: 0,
        minWidth: 'unset',
        svg: {
          width: 22,
          height: 24,
        },
      },
    },
    [`& .${paperClasses.root}`]: {
      width: 311,
      height: 'auto',
      margin: 0,
      borderRadius: 2.4,
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '24px',
    },
  },
} as const;

export default styles;
