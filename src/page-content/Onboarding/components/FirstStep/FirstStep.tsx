import { Box, Typography } from '@mui/material';

import { StyledContainer } from '@/components';
import { FirstOnboardingStepForm } from '@/components/forms';

import styles from './styles';

const FirstStep = () => {
  return (
    <StyledContainer sx={styles.root}>
      <Box sx={styles.titleBox}>
        <Typography sx={styles.title}>
          Tell us a little bit
          <br /> about yourself
        </Typography>
      </Box>
      <FirstOnboardingStepForm />
    </StyledContainer>
  );
};

export default FirstStep;
