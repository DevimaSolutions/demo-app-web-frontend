import { buttonBaseClasses } from '@mui/material';

const styles = {
  root: (selected: boolean) => ({
    ...(selected && { background: '#F4F4F4' }), //move to theme
    [`&.${buttonBaseClasses.root}`]: {
      minWidth: 48,
      width: 48,
      height: 48,
    },
  }),
} as const;

export default styles;
