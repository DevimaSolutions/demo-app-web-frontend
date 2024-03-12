import { Box, Button, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { LetterIcon } from '@/components';
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
          <Form style={styles.form}>
            <Field
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your email"
              fullWidth
              component={TextInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LetterIcon width={20} height={20} />
                  </InputAdornment>
                ),
              }}
            />
            <Field
              name="password"
              autoComplete="current-password"
              placeholder="Password"
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
              Login
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
