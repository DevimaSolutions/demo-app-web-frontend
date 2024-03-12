const styles = {
  root: {
    p: '48px 40px',
    gap: 0,
    minWidth: 480,
  },
  title: {
    fontSize: 24,
    lineHeight: 1.333,
    fontWeight: 500,
    mb: 1,
  },
  codeInput: {
    mt: 4,
  },
  buttonContainer: {
    width: '100%',
    mt: 7,
    display: 'flex',
    flexDirection: 'column',
    gap: 1.25,
  },
} as const;

export default styles;
