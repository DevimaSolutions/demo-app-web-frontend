import { Button, CircularProgress } from '@mui/material';

import { LinkedInIcon } from '@/components';

import useLinkedinAuthButton from './useLinkedinAuthButton';

import type { ILinkedinAuthButtonProps } from './types';

const LinkedinAuthButton = (props: ILinkedinAuthButtonProps) => {
  const { loginWithLinkedIn, isLogging } = useLinkedinAuthButton();
  return (
    <Button variant="social" onClick={loginWithLinkedIn} disabled={isLogging} {...props}>
      {isLogging ? <CircularProgress /> : <LinkedInIcon />}
    </Button>
  );
};

export default LinkedinAuthButton;
