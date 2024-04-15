import { addMinutes, differenceInSeconds, subMinutes } from 'date-fns';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useAuthContext } from '@/context';
import { useTimer } from '@/hooks';

import type { IEnergyResponse } from '@/data-transfer/responses';

const useEnergy = () => {
  const { user } = useAuthContext();
  const [energy, setEnergy] = useState<IEnergyResponse>({
    recoveryMinutes: 0,
    energy: 0,
    fullRecoveryIn: null,
    maxPoints: 0,
    userId: '',
  });

  const recoverySeconds = useMemo(() => {
    if (!energy.fullRecoveryIn) {
      return null;
    }

    const points = energy.maxPoints - energy.energy - 1;

    return differenceInSeconds(
      subMinutes(new Date(energy.fullRecoveryIn), points * energy.recoveryMinutes),
      new Date(),
    );
  }, [energy.fullRecoveryIn, energy.maxPoints, energy.energy, energy.recoveryMinutes]);

  const refillEnergy = useCallback((value: number) => {
    setEnergy((prev) => {
      if (value + 1 >= prev.maxPoints) {
        return {
          ...prev,
          energy: prev.maxPoints,
          fullRecoveryIn: null,
        };
      } else {
        return {
          ...prev,
          energy: value + 1,
          fullRecoveryIn: addMinutes(
            new Date(),
            prev.recoveryMinutes * (prev.maxPoints - (value + 1)),
          ),
        };
      }
    });
  }, []);

  const { seconds, minutes, totalSeconds } = useTimer(recoverySeconds, refillEnergy, energy.energy);

  useEffect(() => {
    if (user) {
      setEnergy(user.energy);
    }
  }, [user]);

  return {
    energy: energy.energy,
    maxPoints: energy.maxPoints,
    seconds,
    minutes,
    totalSeconds,
    timeInSeconds: energy.recoveryMinutes * 60,
  };
};

export default useEnergy;
