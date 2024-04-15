import { Box } from '@mui/material';

import styles from './styles';
import useEnergyElement from './useEnergyElement';

import type { IEnergyElementProps } from './types';

const EnergyElement = ({
  energyCount,
  position,
  totalSeconds,
  timeInSeconds,
}: IEnergyElementProps) => {
  const { isFilling, fillingPosition } = useEnergyElement({
    energyCount,
    position,
    totalSeconds,
    timeInSeconds,
  });
  return <Box sx={styles.energyElement(isFilling, fillingPosition)}></Box>;
};

export default EnergyElement;
