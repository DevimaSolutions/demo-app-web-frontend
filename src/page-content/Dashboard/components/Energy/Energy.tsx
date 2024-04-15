import { Box } from '@mui/material';

import { EnergyIcon } from '@/components';

import { EnergyElement } from './components';
import styles from './styles';
import useEnergy from './useEnergy';

const Energy = () => {
  const { energy, seconds, maxPoints, minutes, totalSeconds, timeInSeconds } = useEnergy();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.dataSection}>
        <Box sx={styles.energyBox}>
          {energy} <EnergyIcon />
        </Box>
        <Box sx={styles.time}>
          {minutes}:{seconds}
        </Box>
      </Box>
      <Box sx={styles.progressSection}>
        {Array.from({ length: maxPoints }).map((_, idx) => (
          <EnergyElement
            energyCount={energy}
            position={idx}
            totalSeconds={totalSeconds}
            timeInSeconds={timeInSeconds}
            key={idx}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Energy;
