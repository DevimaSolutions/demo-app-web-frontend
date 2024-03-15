import { theme } from '@/constants';

const styles = {
  root: (isSelected: boolean) => ({
    ...(isSelected && {
      border: `1.5px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary[800],
    }),
  }),
} as const;

export default styles;
