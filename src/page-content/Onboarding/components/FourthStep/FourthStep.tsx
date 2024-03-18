import { Typography } from '@mui/material';

import { SelectSkillsForm, StyledContainer } from '@/components';

import styles from './styles';

const FourthStep = () => {
  return (
    <StyledContainer sx={styles.root}>
      <Typography variant="h2">What’s important for you?</Typography>
      <Typography variant="caption">Choose three options</Typography>
      <SelectSkillsForm />
    </StyledContainer>
  );
};

export default FourthStep;
