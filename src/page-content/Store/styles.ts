const styles = {
  root: {
    p: 6,
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  variantContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  loader: {
    color: 'blue',
  },
} as const;

export default styles;
