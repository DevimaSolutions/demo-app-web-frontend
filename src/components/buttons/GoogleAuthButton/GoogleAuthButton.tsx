import { Button, CircularProgress } from '@mui/material';

import { GoogleIcon } from '@/components';

import useGoogleAuthButton from './useGoogleAuthButton';

import type { IGoogleAuthButtonProps } from './types';

const GoogleAuthButton = (props: IGoogleAuthButtonProps) => {
  const { login, isLogging } = useGoogleAuthButton();
  return (
    <Button variant="social" onClick={() => login()} disabled={isLogging} {...props}>
      {isLogging ? <CircularProgress /> : <GoogleIcon />}
    </Button>
  );
};

export default GoogleAuthButton;
