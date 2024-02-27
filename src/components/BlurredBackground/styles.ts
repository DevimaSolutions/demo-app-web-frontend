const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    bgcolor: '#D2CFDC', // Connect MUI theme in this file
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    ':after': {
      display: 'block',
      content: '""',
      position: 'fixed',
      width: 1172,
      height: 1172,
      opacity: '0.6',
      right: -242,
      top: -262,
      borderRadius: '50%',
      filter: 'blur(250px)',
      bgcolor: '#A59EBE',
    },
    ':before': {
      display: 'block',
      content: '""',
      position: 'fixed',
      width: 1071,
      height: 880,
      left: -241,
      bottom: -262,
      opacity: '0.6',
      borderRadius: '50%',
      filter: 'blur(250px)',
      bgcolor: '#D4A1B3',
    },
  },
  children: {
    zIndex: 2,
    width: '100%',
  },
} as const;
export default styles;
