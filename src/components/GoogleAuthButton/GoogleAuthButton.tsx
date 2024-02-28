import { Button } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleAuthButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // TODO: send token to backend and login user
      console.log('tokenResponse', tokenResponse);
    },
    onError: () => console.log('Login Failed'),
  });

  return (
    <Button variant="outlined" onClick={() => login()}>
      Continue with Google
    </Button>
  );
};

export default GoogleAuthButton;
