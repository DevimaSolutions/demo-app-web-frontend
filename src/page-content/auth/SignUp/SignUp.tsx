import { Box, Typography } from '@mui/material';

import { SignUpForm } from '@/components';

import styles from './styles';

const SignUp = () => {
  return (
    <Box sx={styles.root}>
      <Typography>Sign Up</Typography>
      <SignUpForm />
    </Box>
  );
};

export default SignUp;
