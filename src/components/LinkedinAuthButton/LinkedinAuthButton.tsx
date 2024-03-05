import { Button, CircularProgress } from '@mui/material';

import useLinkedinAuthButton from './useLinkedinAuthButton';

const LinkedinAuthButton = () => {
  const { loginWithLinkedIn, isLogging } = useLinkedinAuthButton();
  return (
    <Button variant="outlined" onClick={loginWithLinkedIn} disabled={isLogging}>
      {isLogging ? <CircularProgress /> : 'LinkedinAuthButton'}
    </Button>
  );
};

export default LinkedinAuthButton;
