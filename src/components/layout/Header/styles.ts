import { toolbarClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  appBar: {
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none',
    top: 0,
    bottom: 0,
    width: 96,
    right: 'calc(100% - 96px)',
  },
  toolbar: {
    width: 96,
    height: '100%',
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
  signOutOption: {
    marginTop: 'auto',
  },
} as const;

export default styles;
