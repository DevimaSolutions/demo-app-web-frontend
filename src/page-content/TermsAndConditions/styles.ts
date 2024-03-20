import { linkClasses, typographyClasses } from '@mui/material';

const styles = {
  root: {
    width: 900,
    margin: 'auto',
    mt: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    [`& .${typographyClasses.h6}`]: {
      mt: 1,
      fontWeight: 600,
    },
    [`& .${linkClasses.root}`]: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    b: {
      fontWeight: 600,
    },
    ul: {
      margin: 0,
      paddingLeft: 2.5,
    },
  },
  commonPadding: {
    paddingLeft: 4,
  },
} as const;

export default styles;
