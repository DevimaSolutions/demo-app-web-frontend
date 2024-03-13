import { makeStyles } from '@mui/styles';

import { theme } from '@/constants';

const useColorStyles = makeStyles(() => ({
  toastDefault: {
    background: theme.palette.primary.main,
  },
  toastError: {
    background: theme.palette.error.main,
  },
}));

export default useColorStyles;
