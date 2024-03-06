import { Box, Typography } from '@mui/material';

import { ResetPasswordForm } from '@/components';

import styles from './styles';

import type { IPasswordResetPageProps } from './types';

const ResetPassword = ({ token }: IPasswordResetPageProps) => {
  return (
    <Box sx={styles.root}>
      {token ? (
        <>
          <Typography>Reset password form</Typography>
          <ResetPasswordForm token={token} />
        </>
      ) : (
        <Typography>Invalid Url</Typography>
      )}
    </Box>
  );
};

export default ResetPassword;
