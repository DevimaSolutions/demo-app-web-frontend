import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { PasswordInput, TextInput } from '@/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useForgotPassword from './useSignUpForm';

const SignUpForm = () => {
  const { initialValues, signUpHandler } = useForgotPassword();

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={signUpHandler}>
      {({ isSubmitting }) => (
        <Box sx={styles.container}>
          <Form>
            <Field name="email" fullWidth component={TextInput} label={'email'} />
            <Field
              name="password"
              autoComplete="current-password"
              fullWidth
              component={PasswordInput}
              label={'password'}
            />
            <Field
              name="confirmPassword"
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
              Sign up
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default SignUpForm;
