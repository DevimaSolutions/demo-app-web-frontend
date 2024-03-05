import { Button, CircularProgress } from '@mui/material';

import useGoogleAuthButton from './useGoogleAuthButton';

const GoogleAuthButton = () => {
  const { login, isLogging } = useGoogleAuthButton();
  return (
    <Button variant="outlined" onClick={() => login()} disabled={isLogging}>
      {isLogging ? <CircularProgress /> : 'Continue with Google'}
    </Button>
  );
};

export default GoogleAuthButton;
