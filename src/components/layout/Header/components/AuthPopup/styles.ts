import { iconButtonClasses } from '@mui/material';
import { menuItemClasses } from '@mui/material/MenuItem';

const styles = {
  container: {
    [`& .${iconButtonClasses.root}`]: {
      width: 48,
      height: 48,
      padding: 0,
    },
  },
  menu: {
    width: 200,
    [`& .${menuItemClasses.root}.${menuItemClasses.disabled}`]: {
      opacity: 1,
    },
  },
} as const;

export default styles;
