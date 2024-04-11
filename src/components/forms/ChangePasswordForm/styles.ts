import { buttonClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  container: {
    padding: theme.spacing(4, 4, 3),
    [`& .${buttonClasses.root}`]: {
      mt: 3.5,
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  },
} as const;

export default styles;
