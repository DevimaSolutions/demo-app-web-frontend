import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { TextInput } from '@/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useForgotPasswordForm from './useForgotPasswordForm';

const ForgotPasswordForm = () => {
  const { forgotPasswordHandler, initialValues } = useForgotPasswordForm();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={forgotPasswordHandler}
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
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
