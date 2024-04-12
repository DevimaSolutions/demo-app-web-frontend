import { Box, Button, InputAdornment, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { PersonIcon, TextInput } from '@/components';

import { schema } from './schema';
import styles from './styles';
import useChangeUsernameForm from './useChangeUsernameForm';

import type { IChangeUsernameFormProps } from './types';

export default function ChangeUsernameForm(props: IChangeUsernameFormProps) {
  const { initialValues, submitHandler } = useChangeUsernameForm(props);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      validateOnChange
      onSubmit={submitHandler}
    >
      {({ isSubmitting, values, isValid }) => (
        <Box sx={styles.container}>
          <Form style={styles.form}>
            <Field
              name="username"
              autoComplete="username"
              placeholder="Username"
              fullWidth
              component={TextInput}
              sx={styles.input}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={styles.inputAdornment}>
                    <PersonIcon width={20} height={20} />
                    <Typography>@</Typography>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting || values.username === props.username || !isValid}
            >
              Update
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
