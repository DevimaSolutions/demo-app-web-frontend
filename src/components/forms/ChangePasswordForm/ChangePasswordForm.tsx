import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { PasswordInput } from '@/components';

import { schema } from './schema';
import styles from './styles';
import useChangePasswordForm from './useChangePasswordForm';

import type { IChangePasswordFormProps } from './types';

export default function ChangePasswordForm(props: IChangePasswordFormProps) {
  const { initialValues, submitHandler } = useChangePasswordForm(props);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      validateOnMount
      onSubmit={submitHandler}
    >
      {({ isSubmitting, isValid }) => (
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
              name="confirmPassword"
              autoComplete="current-password"
              placeholder="Confirm password"
              fullWidth
              component={PasswordInput}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              Update
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
