import { paperClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    [`& .${paperClasses.root}`]: {
      height: 404,
    },
  },
  topPart: {
    padding: 5,
  },
  bottomPart: {
    borderRadius: 3.2,
    backgroundColor: theme.palette.common.white,
  },
} as const;

export default styles;
