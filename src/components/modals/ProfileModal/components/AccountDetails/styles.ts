import { alpha, inputClasses, inputLabelClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  inputGrid: {
    display: 'grid',
    gridTemplateColumns: '313px 313px',
    gridColumnGap: 32,
    gridRowGap: 20,
    [`& .${inputClasses.root}`]: {
      ':before': {
        borderBottom: `1px solid ${theme.palette.grey[700]}`,
      },
      '&:hover:not(.Mui-disabled, .Mui-error):before': {
        borderBottom: `2px solid ${theme.palette.grey[700]}`,
      },
      '&:hover': {
        cursor: 'default',
      },
    },
    [`& .${inputClasses.input}`]: {
      '&:hover': {
        cursor: 'default',
        color: theme.palette.text.secondary,
      },
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '24px',
    },
    [`& .${inputLabelClasses.root}`]: {
      color: alpha(theme.palette.text.secondary, 0.4),
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '16px',
    },
  },
  editEndAdornment: {
    width: 20,
    height: 20,
    svg: {
      color: theme.palette.primary[900],
      width: 15,
      height: 15,
    },
  },
} as const;

export default styles;
