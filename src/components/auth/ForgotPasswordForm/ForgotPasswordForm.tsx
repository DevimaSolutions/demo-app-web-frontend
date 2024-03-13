import { Box, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { FillingButton, LetterIcon } from '@/components';
import { TextInput } from '@/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useForgotPasswordForm from './useForgotPasswordForm';

const ForgotPasswordForm = () => {
  const toastIcon = (
    <Box sx={styles.toastWrapper}>
      <LetterIcon width={12} height={12} viewBox="0, 2, 18, 15" />
    </Box>
  );
  const { forgotPasswordHandler, initialValues, seconds, resendProgress } =
    useForgotPasswordForm(toastIcon);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={forgotPasswordHandler}
    >
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
          <FillingButton
            variant="contained"
            type="submit"
            fullWidth
            segments={60}
            progress={resendProgress}
          >
            {!seconds ? 'Send' : `Resend (${seconds})`}
          </FillingButton>
        </Form>
      </Box>
    </Formik>
  );
};

export default ForgotPasswordForm;
