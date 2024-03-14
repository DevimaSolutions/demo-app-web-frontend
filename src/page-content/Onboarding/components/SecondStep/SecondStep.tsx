import { Box, Button } from '@mui/material';

import { StyledContainer } from '@/components';
import { useDispatch } from '@/hooks';
import { nextStep, prevStep } from '@/redux/onboarding/slice';

import styles from './styles';

const SecondStep = () => {
  //////// Just for example //////////
  const dispatch = useDispatch();

  const prev = () => dispatch(prevStep());
  const next = () => dispatch(nextStep());
  ////////////////////////////////////

  return (
    <StyledContainer sx={styles.root}>
      SecondStep
      <Box sx={styles.buttons}>
        <Button variant="contained" onClick={prev}>
          Prev
        </Button>
        <Button variant="contained" onClick={next}>
          Next
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default SecondStep;
