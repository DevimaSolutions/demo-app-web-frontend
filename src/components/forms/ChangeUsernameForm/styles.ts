import {
  buttonClasses,
  inputBaseClasses,
  outlinedInputClasses,
  typographyClasses,
} from '@mui/material';

import { theme } from '@/constants';

const styles = {
  container: {
    padding: theme.spacing(4, 4, 3),
    [`& .${buttonClasses.root}`]: {
      mt: 3,
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  },
  input: {
    [`& .${inputBaseClasses.input}.${outlinedInputClasses.input}.${outlinedInputClasses.input}`]: {
      paddingLeft: 0,
    },
  },
  inputAdornment: {
    [`& .${typographyClasses.root}`]: {
      paddingLeft: 1.5,
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '20px',
      color: theme.palette.text.primary,
    },
  },
  character: {},
} as const;

export default styles;
