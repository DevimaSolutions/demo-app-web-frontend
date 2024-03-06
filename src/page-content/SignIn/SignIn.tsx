import { Box } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { GoogleAuthButton, LinkedinAuthButton } from '@/components';
import { envUtil } from '@/utils';

import styles from './styles';

export default function SignIn() {
  const { auth } = envUtil.getEnv();

  return (
    <GoogleOAuthProvider clientId={auth.googleClientId}>
      <Box sx={styles.root}>
        {auth.googleClientId && <GoogleAuthButton />}
        {auth.linkedinClientId && <LinkedinAuthButton />}
      </Box>
    </GoogleOAuthProvider>
  );
}
