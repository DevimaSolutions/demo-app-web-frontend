import { Box } from '@mui/material';

import styles from './styles';
import useEnergyElement from './useEnergyElement';

import type { IEnergyElementProps } from './types';

const EnergyElement = ({ energyCount, position, totalSeconds }: IEnergyElementProps) => {
  const { isFilling, fillingPosition } = useEnergyElement({ energyCount, position, totalSeconds });
  return <Box sx={styles.energyElement(isFilling, fillingPosition)}></Box>;
};

export default EnergyElement;
