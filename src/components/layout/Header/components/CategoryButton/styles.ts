import { buttonBaseClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: (selected: boolean) => ({
    ...(selected && { background: theme.palette.grey[400] }),
    [`&.${buttonBaseClasses.root}`]: {
      minWidth: 48,
      width: 48,
      height: 48,
    },
  }),
} as const;

export default styles;
