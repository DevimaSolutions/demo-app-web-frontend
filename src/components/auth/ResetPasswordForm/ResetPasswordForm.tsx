import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { LockIcon } from '@/components/icons';
import { PasswordInput } from '@/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useResetPasswordForm from './useResetPasswordForm';

import type { IResetPasswordFormProps } from './types';

const ResetPasswordForm = ({ token }: IResetPasswordFormProps) => {
  const toastIcon = (
    <Box sx={styles.toastWrapper}>
      <LockIcon width={12} height={12} viewBox="0, 0, 12, 16" />
    </Box>
  );
  const { resetPasswordHandler, initialValues } = useResetPasswordForm({ token, toastIcon });

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={resetPasswordHandler}>
      {({ isSubmitting }) => (
        <Box sx={styles.container}>
          <Form style={styles.form}>
            <Field
              name="password"
              autoComplete="current-password"
              placeholder="New password"
              fullWidth
              component={PasswordInput}
            />
            <Field
              name="repeatPassword"
              autoComplete="current-password"
              placeholder="Confirm new password"
              fullWidth
              component={PasswordInput}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Reset password
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
