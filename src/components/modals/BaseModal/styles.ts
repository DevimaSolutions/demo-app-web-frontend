import {
  alpha,
  buttonBaseClasses,
  dialogClasses,
  dialogContentClasses,
  dialogTitleClasses,
  paperClasses,
} from '@mui/material';

import { theme } from '@/constants';

const styles = {
  dialog: {
    width: '100%',
    height: '100%',
    padding: 0,
    [`& .${dialogContentClasses.root}`]: {
      overflow: 'initial',
      padding: 0,
      background: theme.palette.grey[400],
      borderRadius: 3.2,
    },
    [`& .${dialogTitleClasses.root}`]: {
      padding: 2.5,
      background: theme.palette.common.white,
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '24px',
      borderRadius: theme.spacing(3.5, 3.5, 1.5, 1.5),
      margin: theme.spacing(0.5, 0.5, 0),
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      [`& .${buttonBaseClasses.root}`]: {
        background: alpha(theme.palette.primary[900], 0.1),
        color: theme.palette.primary[900],
        padding: theme.spacing(1.875, 1.75),
        minWidth: 'unset',
        svg: {
          width: 12,
          height: 10,
        },
      },
    },
    [`& .${paperClasses.root}`]: {
      width: 'auto',
      height: 'auto',
      margin: 0,
      borderRadius: 3.2,
      [`&.${dialogClasses.paper}`]: {
        maxWidth: 738,
      },
    },
  },
} as const;

export default styles;
