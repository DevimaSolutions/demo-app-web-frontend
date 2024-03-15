import { typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: (selected: boolean, isSubtitle: boolean) => ({
    display: 'flex',
    gap: 1.25,
    padding: theme.spacing(2, 1.75),
    ...(isSubtitle && { paddingBottom: 1.5 }),
    alignItems: isSubtitle ? 'start' : 'center',
    boxShadow: theme.shadows[2],
    ...(selected && { border: `1.5px solid ${theme.palette.primary.main}` }),
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      border: `1.5px solid ${selected ? theme.palette.primary.main : theme.palette.common.white}`,
      boxShadow: theme.shadows[2],
    },
    '&:active, &:focus': {
      backgroundColor: theme.palette.primary[400],
      border: '1.5px solid rgba(138, 128, 185, 0.3)',
    },
    svg: {
      width: selected ? 22 : 14,
      height: 20,
      color: selected ? theme.palette.primary.main : theme.palette.primary[900],
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