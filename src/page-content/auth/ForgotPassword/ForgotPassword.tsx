import { Typography } from '@mui/material';

import { ForgotPasswordForm, StyledContainer } from '@/components';

import styles from './styles';
import useForgotPassword from './useForgotPassword';

const ForgotPassword = () => {
  const { isPasswordSend } = useForgotPassword();
  return (
    <StyledContainer sx={styles.root}>
      {isPasswordSend ? (
        <Typography>Reset password send</Typography>
      ) : (
        <>
          <Typography>forgot password</Typography>
          <ForgotPasswordForm />
        </>
      )}
    </StyledContainer>
  );
};

export default ForgotPassword;
