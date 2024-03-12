const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    bgcolor: '#E6E1EE', // Connect MUI theme in this file
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  children: {
    zIndex: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
} as const;
export default styles;
