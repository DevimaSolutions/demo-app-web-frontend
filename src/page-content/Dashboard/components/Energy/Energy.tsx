import { Box, Typography } from '@mui/material';

import { EnergyIcon } from '@/components';

import { EnergyElement } from './components';
import styles from './styles';
import useEnergy from './useEnergy';

const Energy = () => {
  const { energy, seconds, minutes, totalSeconds } = useEnergy();
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>Energy</Typography>
      <Box sx={styles.dataSection}>
        <Box sx={styles.energyBox}>
          {energy - 1} <EnergyIcon />
        </Box>
        <Box sx={styles.time}>
          {minutes}:{seconds}
        </Box>
      </Box>
      <Box sx={styles.progressSection}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <EnergyElement
            energyCount={energy}
            position={idx + 1}
            totalSeconds={totalSeconds}
            key={idx}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Energy;
