import { Box, Button, Typography } from '@mui/material';

import { OptionButton, StyledContainer } from '@/components';

import socialStatusOptions from './constants';
import styles from './styles';
import useSecondStep from './useSecondStep';

const SecondStep = () => {
  const { prev, handleOptionClick, data } = useSecondStep();

  return (
    <StyledContainer sx={styles.root}>
      <Typography variant="h2">
        Which describes
        <br />
        you best?
      </Typography>
      <Box sx={styles.buttons}>
        {socialStatusOptions(data?.secondStep.profileType).map((option, index) => (
          <OptionButton
            key={index}
            icon={option.icon}
            title={option.title}
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
      </Box>
    </StyledContainer>
  );
};

export default SecondStep;
