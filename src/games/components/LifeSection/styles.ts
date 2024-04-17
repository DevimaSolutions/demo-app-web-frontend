import { alpha } from '@mui/material';

import { theme } from '@/constants';

export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    p: 2,
    gap: 1,
    borderRadius: 2.4,
    background: alpha(theme.palette.common.rubies, 0.1),
  },
} as const;

export default styles;
