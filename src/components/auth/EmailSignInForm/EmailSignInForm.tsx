import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { PasswordInput, TextInput } from '@/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useEmailSignInForm from './useEmailSignInForm';

export default function EmailSignInForm() {
  const onSubmit = useEmailSignInForm();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Box sx={styles.container}>
          <Form>
            <Field
              type="email"
              name="email"
              autoComplete="email"
              fullWidth
              component={TextInput}
              label={'email'}
            />

            <Field
              name="password"
              autoComplete="current-password"
              fullWidth
              component={PasswordInput}
              label={'password'}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Sign In
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
