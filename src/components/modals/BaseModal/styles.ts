import { dialogClasses, dialogContentClasses, paperClasses } from '@mui/material';

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
    [`& .${paperClasses.root}`]: {
      width: '100%',
      height: '100%',
      margin: 0,
      borderRadius: 3.2,
      [`&.${dialogClasses.paper}`]: {
        maxWidth: 738,
      },
    },
  },
} as const;

export default styles;
