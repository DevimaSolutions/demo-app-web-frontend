import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { FillingButton } from '@/components/buttons';
import { ArrowLineIcon } from '@/components/icons';
import { SelectChipInput } from '@/components/inputs';

import skillOptions from './constants';
import { schema } from './schema';
import styles from './styles';
import useSelectSkillsForm from './useSelectSkillsForm';

export default function SelectSkillsForm() {
  const { initialValues, handleSubmit, handleReturn } = useSelectSkillsForm();
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      {({ values }) => (
        <Box sx={styles.container}>
          <Form style={styles.form}>
            <Field
              name="skills"
              fullWidth
              options={skillOptions}
              sx={styles.input}
              errorSx={styles.error}
              component={SelectChipInput}
            />
            <Box sx={styles.boxWrapper}>
              <Button variant="contained" color="secondary" type="button" onClick={handleReturn}>
                <ArrowLineIcon height={20} fill="#8A80B9" direction="down" />
              </Button>
              <FillingButton
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                segments={3}
                progress={values.skills.length}
              >
                {values.skills.length === 3 ? 'Go to Shaper' : 'Next'}
              </FillingButton>
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
