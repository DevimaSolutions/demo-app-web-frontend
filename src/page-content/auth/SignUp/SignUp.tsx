import { Box, Link, Typography } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Image from 'next/image';

import { GoogleAuthButton, LinkedinAuthButton, SignUpForm, StyledContainer } from '@/components';
import { envUtil } from '@/utils';

import styles from './styles';

const SignUp = () => {
  const { auth } = envUtil.getEnv();

  return (
    <GoogleOAuthProvider clientId={auth.googleClientId}>
      <Box sx={styles.container}>
        <StyledContainer sx={styles.root}>
          <Box sx={styles.titleIconWrapper}>
            <Image src={'/logo.svg'} width={32} height={32} alt="Logo" />
            <Box sx={styles.titleWrapper}>
              <Typography variant="h2">Get Started</Typography>
              <Typography variant="subtitle1">
                Ready to skill up? Shaper GAP® awaits.
                <br />
                Let&apos;s make learning awesome!
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.formWrapper}>
            <SignUpForm />
            <Typography variant="subtitle1">
              By signing up, I agree to the <Link href="privacy-policy">Privacy Policy</Link> and
              <Link href="terms-and-conditions">Terms and Conditions</Link>
            </Typography>
          </Box>
          <Box sx={styles.socialsWrapper}>
            <Box sx={styles.buttonWrapper}>
              {auth.linkedinClientId && <LinkedinAuthButton fullWidth />}
              {auth.googleClientId && <GoogleAuthButton fullWidth />}
            </Box>
          </Box>
        </StyledContainer>
        <Box sx={styles.bottomLinks}>
          <Typography variant="subtitle1">Have an account?</Typography>
          <Link href="/sign-in">Login</Link>
        </Box>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
