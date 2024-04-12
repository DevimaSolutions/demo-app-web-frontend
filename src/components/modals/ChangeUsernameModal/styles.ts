import { dialogContentClasses } from '@mui/material';

const styles = {
  root: {
    [`& .${dialogContentClasses.root}`]: {
      width: 359,
    },
  },
} as const;

export default styles;
