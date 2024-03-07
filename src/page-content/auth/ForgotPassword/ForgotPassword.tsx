import { Box, Typography } from '@mui/material';

import { ForgotPasswordForm } from '@/components';

import styles from './styles';
import useForgotPassword from './useForgotPassword';

const ForgotPassword = () => {
  const { isPasswordSend } = useForgotPassword();
  return (
    <Box sx={styles.root}>
      {isPasswordSend ? (
        <Typography>Reset password send</Typography>
      ) : (
        <>
          <Typography>forgot password</Typography>
          <ForgotPasswordForm />
        </>
      )}
    </Box>
  );
};

export default ForgotPassword;
