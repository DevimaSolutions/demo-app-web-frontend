import { alpha } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    background: alpha(theme.palette.grey[600], 0.4),
    textTransform: 'uppercase',
    color: theme.palette.common.white,
    padding: theme.spacing(0.25, 0.75, 0.375),
    fontWeight: 600,
    fontSize: 10,
    lineHeight: '12px',
    borderRadius: 0.4,
  },
} as const;

export default styles;
