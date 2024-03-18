import { Box, Button, Typography } from '@mui/material';
import { useCallback } from 'react';

import { OptionButton, StyledContainer } from '@/components';
import { useDispatch } from '@/hooks';
import { nextStep, prevStep } from '@/redux/onboarding/slice';

import learningPaceOptions from './constants';
import styles from './styles';

const ThirdStep = () => {
  //////// Just for example //////////
  const dispatch = useDispatch();

  const prev = () => dispatch(prevStep());
  const next = () => dispatch(nextStep());
  ////////////////////////////////////

  const handleOptionClick = useCallback(
    (optionValue: string) => () => {
      console.log(optionValue); //temporary solution
    },
    [],
  );

  return (
    <StyledContainer sx={styles.root}>
      <Typography variant="h2">
        Which describes
        <br />
        you best?
      </Typography>
      <Box sx={styles.buttons}>
        {learningPaceOptions.map((option, index) => (
          <OptionButton
            key={index}
            icon={option.icon}
            title={option.title}
            subtitle={option.subtitle}
            selected={option.selected}
            onClick={handleOptionClick(option.value)}
            fullWidth
          />
        ))}
      </Box>
      <Box sx={styles.navButtons}>
        <Button variant="contained" onClick={prev} fullWidth>
          Back
        </Button>
        <Button variant="contained" onClick={next}>
          Next
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default ThirdStep;
