import { Box, Button, Typography } from '@mui/material';

import { FillingButton, StyledContainer } from '@/components';

import { CodeInput } from './components';
import styles from './styles';
import useVerifyEmail from './useVerifyEmail';

const VerifyEmail = () => {
  const { sendCode, handleFocus, settings, resendEmail, resendProgress, seconds, backToLogIn } =
    useVerifyEmail();
  return (
    <StyledContainer sx={styles.root}>
      <Typography sx={styles.title}>Verification</Typography>
      <Typography variant="caption">Please enter the code sent to your email.</Typography>
      <CodeInput
        sx={styles.codeInput}
        onComplete={sendCode}
        onFocus={handleFocus}
        isError={settings.isError}
      />
      <Box sx={styles.buttonContainer}>
        <FillingButton
          variant="contained"
          onClick={resendEmail}
          fullWidth
          segments={60}
          progress={resendProgress}
        >
          Resend code {!!seconds && `(${seconds})`}
        </FillingButton>
        <Button variant="containedSecondary" fullWidth onClick={backToLogIn}>
          Back to login
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default VerifyEmail;
