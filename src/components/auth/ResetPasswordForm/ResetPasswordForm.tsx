import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { PasswordInput } from '@/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useResetPasswordForm from './useResetPasswordForm';

import type { IResetPasswordFormProps } from './types';

const ResetPasswordForm = ({ token }: IResetPasswordFormProps) => {
  const { resetPasswordHandler, initialValues } = useResetPasswordForm({ token });

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={resetPasswordHandler}>
      {({ isSubmitting }) => (
        <Box sx={styles.container}>
          <Form>
            <Field
              name="password"
              autoComplete="current-password"
              fullWidth
              component={PasswordInput}
              label={'password'}
            />
            <Field
              name="repeatPassword"
              autoComplete="current-password"
              fullWidth
              component={PasswordInput}
              label={'repeat password'}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              send
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
