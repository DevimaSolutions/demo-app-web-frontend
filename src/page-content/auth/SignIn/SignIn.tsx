import { Box, Link, Typography } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Image from 'next/image';

import {
  EmailSignInForm,
  GoogleAuthButton,
  LinkedinAuthButton,
  StyledContainer,
} from '@/components';
import { envUtil } from '@/utils';

import styles from './styles';

export default function SignIn() {
  const { auth } = envUtil.getEnv();

  return (
    <GoogleOAuthProvider clientId={auth.googleClientId}>
      <StyledContainer sx={styles.root}>
        <Box sx={styles.root}>
          <Box sx={styles.container}>
            <Box sx={styles.titleIconWrapper}>
              <Image src={'/logo.svg'} width={32} height={32} alt="Logo" />
              <Box sx={styles.titleWrapper}>
                <Typography variant="h2">Welcome Back</Typography>
                <Typography variant="subtitle1">
                  It’s time to dive back into your skill-building journey with Shaper GAP®!
                </Typography>
              </Box>
            </Box>
            <EmailSignInForm />
            <Box sx={styles.socialsWrapper}>
              <Link href="/forgot-password">Forgot password?</Link>
              <Box sx={styles.buttonWrapper}>
                {auth.linkedinClientId && <LinkedinAuthButton fullWidth />}
                {auth.googleClientId && <GoogleAuthButton fullWidth />}
              </Box>
            </Box>
          </Box>
          <Box sx={styles.bottomLinks}>
            <Typography variant="subtitle1">Don’t have an account?</Typography>
            <Link href="/sign-up">Sign up</Link>
          </Box>
        </Box>
      </StyledContainer>
    </GoogleOAuthProvider>
  );
}
