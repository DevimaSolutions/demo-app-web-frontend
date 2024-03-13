import { Typography, Box, Link } from '@mui/material';
import Image from 'next/image';

import { ForgotPasswordForm, StyledContainer } from '@/components';

import styles from './styles';

const ForgotPassword = () => {
  return (
    <StyledContainer sx={styles.root}>
      <Box sx={styles.titleIconWrapper}>
        <Image src={'/logo.svg'} width={32} height={32} alt="Logo" />
        <Box sx={styles.titleWrapper}>
          <Typography variant="h2">Forgot Password</Typography>
          <Typography variant="subtitle1">
            Please enter your email to reset your password
          </Typography>
        </Box>
      </Box>
      <ForgotPasswordForm />
      <Link href="/sign-in">Back to Login</Link>
    </StyledContainer>
  );
};

export default ForgotPassword;
