import { Box, Button, CircularProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { FillingButton } from '@/components/buttons';
import { ArrowLineIcon } from '@/components/icons';
import { SelectChipInput } from '@/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useSelectSkillsForm from './useSelectSkillsForm';

export default function SelectSkillsForm() {
  const { initialValues, submitHandler, prev, options } = useSelectSkillsForm();
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submitHandler}>
      {({ values, isValid, isSubmitting }) => (
        <Box sx={styles.container}>
          <Form style={styles.form}>
            {!!options ? (
              <Field
                name="skills"
                fullWidth
                options={options}
                sx={styles.input}
                errorSx={styles.error}
                component={SelectChipInput}
              />
            ) : (
              <Box>
                <CircularProgress size={60} />
              </Box>
            )}
            <Box sx={styles.boxWrapper}>
              <Button variant="contained" color="secondary" type="button" onClick={prev}>
                <ArrowLineIcon height={20} fill="#8A80B9" direction="down" />
              </Button>
              <FillingButton
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting || !isValid}
                type="submit"
                segments={3}
                progress={values.skills.length}
              >
                {values.skills.length >= 3 ? 'Go to Shaper' : 'Next'}
              </FillingButton>
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
