import { GoogleOAuthProvider } from '@react-oauth/google';

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
        {auth.googleClientId && <GoogleAuthButton />}
        {auth.linkedinClientId && <LinkedinAuthButton />}
        <EmailSignInForm />
      </StyledContainer>
    </GoogleOAuthProvider>
  );
}
