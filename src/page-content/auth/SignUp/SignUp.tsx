import { Typography } from '@mui/material';

import { SignUpForm, StyledContainer } from '@/components';

import styles from './styles';

const SignUp = () => {
  return (
    <StyledContainer sx={styles.root}>
      <Typography>Sign Up</Typography>
      <SignUpForm />
    </StyledContainer>
  );
};

export default SignUp;
