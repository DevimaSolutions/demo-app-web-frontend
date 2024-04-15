import { useMemo } from 'react';

import type { IEnergyElementProps } from './types';

const useEnergyElement = ({
  energyCount,
  position,
  totalSeconds,
  timeInSeconds,
}: IEnergyElementProps) => {
  const isFilling = useMemo(() => energyCount === position, [energyCount, position]);

  const fillingPosition = useMemo(() => {
    if (energyCount > position) return 0;
    if (energyCount < position) return 100;
    if (!totalSeconds) return 100;
    return (100 / timeInSeconds) * totalSeconds;
  }, [energyCount, position, timeInSeconds, totalSeconds]);

  return { isFilling, fillingPosition };
};

export default useEnergyElement;
