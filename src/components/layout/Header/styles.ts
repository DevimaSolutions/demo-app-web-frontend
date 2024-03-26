import { toolbarClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none',
    top: 0,
    bottom: 0,
    width: 96,
    right: 'calc(100% - 96px)',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    [`&.${toolbarClasses.root}`]: {
      padding: 3,
    },
  },
  divider: {
    borderColor: theme.palette.grey[400],
    width: '100%',
  },
} as const;

export default styles;
