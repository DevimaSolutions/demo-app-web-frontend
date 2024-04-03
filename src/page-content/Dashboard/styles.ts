const styles = {
  root: {
    p: 6,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: 4,
  },
  title: {
    fontSize: 40,
    lineHeight: '48px',
    fontWeight: 600,
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
  rowContainer: {
    display: 'flex',
    gap: 4,
    width: '100%',
  },
} as const;

export default styles;
