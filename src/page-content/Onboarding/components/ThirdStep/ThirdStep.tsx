import { Box, Button, Typography } from '@mui/material';

import { OptionButton, StyledContainer } from '@/components';

import learningPaceOptions from './constants';
import styles from './styles';
import useThirdStep from './useThirdStep';

const ThirdStep = () => {
  const { prev, handleOptionClick, data } = useThirdStep();

  return (
    <StyledContainer sx={styles.root}>
      <Typography variant="h2">
        What’s your preferred
        <br />
        learning pace?
      </Typography>
      <Box sx={styles.buttons}>
        {learningPaceOptions(data?.thirdStep.learningPace).map((option, index) => (
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
      </Box>
    </StyledContainer>
  );
};

export default ThirdStep;
