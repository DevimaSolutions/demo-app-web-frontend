import { typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: (selected: boolean, isSubtitle: boolean) => ({
    display: 'flex',
    gap: 1.25,
    padding: isSubtitle ? theme.spacing(1.875, 1.625, 1.375) : theme.spacing(1.875, 1.625),
    borderRadius: 1.2,
    alignItems: isSubtitle ? 'start' : 'center',
    boxShadow: theme.shadows[2],
    ...(selected && { border: `1.5px solid ${theme.palette.primary[900]}` }),
    '&:hover, &:active, &:focus': {
      backgroundColor: theme.palette.common.white,
      border: `1.5px solid ${theme.palette.primary[500]}`,
      boxShadow: theme.shadows[2],
    },
    svg: {
      width: selected ? 22 : 14,
      height: 20,
      color: theme.palette.primary[900],
    },
  }),
  iconWrapper: {
    mb: 0.5,
    svg: {
      width: 20,
      height: 20,
    },
  },
  content: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(0.25, 0),
    [`& .${typographyClasses.subtitle1}`]: {
      lineHeight: '20px',
    },
  },
} as const;

export default styles;
