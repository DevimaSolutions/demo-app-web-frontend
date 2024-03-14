import { Box, Typography } from '@mui/material';

import { FillingButton, NextLinkButton, StyledContainer } from '@/components';

import { CodeInput } from './components';
import styles from './styles';
import useVerifyEmail from './useVerifyEmail';

const VerifyEmail = () => {
  const { sendCode, handleFocus, settings, resendEmail, resendProgress, seconds } =
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
        <NextLinkButton variant="containedSecondary" fullWidth href={'/sign-in'}>
          Back to login
        </NextLinkButton>
      </Box>
    </StyledContainer>
  );
};

export default VerifyEmail;
