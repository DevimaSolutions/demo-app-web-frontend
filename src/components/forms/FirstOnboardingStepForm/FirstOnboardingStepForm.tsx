import { Box, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { CalendarIcon, FillingButton, PersonCircleIcon, PersonIcon } from '@/components';
import { SelectInput, TextInput } from '@/components/inputs';
import { UserGenderEnum } from '@/data-transfer/requests';

import { schema } from './schema';
import styles from './styles';
import useFirstOnboardingStepForm from './useFirstOnboardingStepForm';

export const FirstOnboardingStepForm = () => {
  const { calculateProgress, initialValues, submitHandler } = useFirstOnboardingStepForm();
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submitHandler}>
      {({ isSubmitting, values, isValid }) => (
        <Box sx={styles.container}>
          <Form style={styles.form}>
            <Field
              type="name"
              name="name"
              placeholder="Name"
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
            <Box sx={styles.rowContainer}>
              <Field
                name="age"
                placeholder="Age"
                fullWidth
                component={TextInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarIcon width={20} height={20} />
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                name="gender"
                placeholder="Gender"
                fullWidth
                component={SelectInput}
                options={Object.values(UserGenderEnum)}
                startAdornment={<PersonCircleIcon width={20} height={20} />}
              />
            </Box>

            <FillingButton
              variant="contained"
              fullWidth
              segments={3}
              progress={calculateProgress(values)}
              type="submit"
              disabled={isSubmitting || !isValid}
              sx={styles.button}
            >
              Next
            </FillingButton>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default FirstOnboardingStepForm;
