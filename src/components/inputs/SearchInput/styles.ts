import { alpha, inputBaseClasses, outlinedInputClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  searchInput: {
    width: '100%',
    [`& .${inputBaseClasses.root}.${outlinedInputClasses.root}`]: {
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.grey[700],
      border: `1px solid ${alpha(theme.palette.grey[600], 0.1)}`,
      '&:hover': {
        backgroundColor: theme.palette.grey[400],
        border: `1px solid ${alpha(theme.palette.grey[600], 0.1)}`,
      },
      '&.Mui-focused': {
        boxShadow: 'none',
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${alpha(theme.palette.grey[600], 0.1)}`,
      },
      input: {
        fontWeight: 500,
        color: theme.palette.grey[600],
        '&::placeholder': {
          color: alpha(theme.palette.grey[600], 0.3),
          fontWeight: 500,
        },
      },
    },
  },
} as const;

export default styles;
