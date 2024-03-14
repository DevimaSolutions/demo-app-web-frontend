import { Box } from '@mui/material';

import { ProgressSegment } from './components';
import styles from './styles';
import useOnboardingProgress from './useOnboardingProgress';

const OnboardingProgress = () => {
  const { stepSettings } = useOnboardingProgress();
  return (
    <Box sx={styles.root}>
      {stepSettings.map((status, idx) => (
        <ProgressSegment status={status} key={idx} />
      ))}
    </Box>
  );
};

export default OnboardingProgress;
