const styles = {
  root: {
    width: '100%',
    minHeight: '100vh',
    p: 6,
    display: 'flex',
    gap: 4,
  },
  leftTable: {
    width: 661,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  rightTable: {
    width: 315,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
} as const;

export default styles;
