import { buttonClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  container: {
    width: 550,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    justifyContent: 'center',
  },
  error: {
    textAlign: 'center',
    marginLeft: 0,
  },
  boxWrapper: {
    display: 'flex',
    mt: 4.5,
    gap: 1.25,
    [`& .${buttonClasses.containedSecondary}`]: {
      minWidth: 48,
      padding: theme.spacing(1.625, 1.375),
    },
  },
} as const;

export default styles;
