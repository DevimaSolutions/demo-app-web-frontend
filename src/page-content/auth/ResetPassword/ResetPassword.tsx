import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image';

import { ResetPasswordForm, StyledContainer } from '@/components';

import styles from './styles';

import type { IPasswordResetPageProps } from './types';

const ResetPassword = ({ token }: IPasswordResetPageProps) => {
  return (
    <StyledContainer sx={styles.root}>
      <Box sx={styles.titleIconWrapper}>
        <Image src={'/logo.svg'} width={32} height={32} alt="Logo" />
        <Box sx={styles.titleWrapper}>
          <Typography variant="h2">New Password</Typography>
          <Typography variant="subtitle1">Enter your new password below</Typography>
        </Box>
      </Box>
      <ResetPasswordForm token={token} />
      <Link href="/sign-in">Back to Login</Link>
    </StyledContainer>
  );
};

export default ResetPassword;
