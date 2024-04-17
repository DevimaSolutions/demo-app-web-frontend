import { Box, Button, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { PersonIcon, TextInput } from '@/components';

import { schema } from './schema';
import styles from './styles';
import useChangeNameForm from './useChangeNameForm';

import type { IChangeNameFormProps } from './types';

export default function ChangeNameForm(props: IChangeNameFormProps) {
  const { initialValues, submitHandler } = useChangeNameForm(props);
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
              name="name"
              autoComplete="name"
              placeholder="Your name"
              fullWidth
              component={TextInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon width={20} height={20} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting || values.name === props.name || !isValid}
            >
              Update
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
}