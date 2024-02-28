import { Box } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { GoogleAuthButton } from '@/components';
import { envUtil } from '@/utils';

import styles from './styles';

export default function SignIn() {
  const { googleClientId } = envUtil.getEnv();

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Box sx={styles.root}>{googleClientId && <GoogleAuthButton />}</Box>
    </GoogleOAuthProvider>
  );
}
