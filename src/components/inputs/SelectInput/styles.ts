import { outlinedInputClasses } from '@mui/material';

import { theme } from '@/constants';

const commonStyles = {
  optionHover: {
    '&:hover, &:active, &.Mui-focused': {
      backgroundColor: theme.palette.primary[400],
      color: theme.palette.primary[800],
    },
  },
};

const styles = {
  root: {
    [`&.${outlinedInputClasses.root}`]: {
      '&:active, &.Mui-focused': {
        border: `1.5px solid ${theme.palette.common.white}`,
        boxShadow: theme.shadows[0],
      },
      '&.Mui-focused:hover': {
        border: `1.5px solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[1],
      },
    },
  },
  placeholder: {
    color: theme.palette.primary[300],
    fontFamily: 'Poppins',
    opacity: 1,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
  },

  option: {
    padding: 1.5,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
    borderRadius: 0.5,
    display: 'flex',
    gap: 0.5,
    svg: {
      width: 14,
      height: 18,
      color: theme.palette.primary[900],
    },
    ...commonStyles.optionHover,
    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.common.white,
      ...commonStyles.optionHover,
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary[800],
      '&.Mui-focusVisible': {
        backgroundColor: theme.palette.common.white,
      },
      ...commonStyles.optionHover,
    },
  },
  icon: {
    ['&.MuiSelect-icon']: {
      width: 20,
      height: 20,
      color: theme.palette.primary[300],
      top: 'calc(50% - 10px)',
      right: 16,
    },
  },
} as const;
export default styles;
