import { Typography } from '@mui/material';

import { ResetPasswordForm, StyledContainer } from '@/components';

import styles from './styles';

import type { IPasswordResetPageProps } from './types';

const ResetPassword = ({ token }: IPasswordResetPageProps) => {
  return (
    <StyledContainer sx={styles.root}>
      {token ? (
        <>
          <Typography>Reset password form</Typography>
          <ResetPasswordForm token={token} />
        </>
      ) : (
        <Typography>Invalid Url</Typography>
      )}
    </StyledContainer>
  );
};

export default ResetPassword;
