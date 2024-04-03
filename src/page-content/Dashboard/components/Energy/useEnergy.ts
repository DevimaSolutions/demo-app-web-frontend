import { useState } from 'react';

import { useTimer } from '@/hooks';

const useEnergy = () => {
  const [energy, setEnergy] = useState(3);
  const [timerMinutes, setTimerMinutes] = useState(5);

  const refillEnergy = () => {
    setEnergy((prev) => (prev < 6 ? prev + 1 : prev));
    if (energy === 5) setTimerMinutes(0);
  };

  const { seconds, minutes, totalSeconds } = useTimer(timerMinutes, refillEnergy, energy);

  return { energy, seconds, minutes, totalSeconds };
};

export default useEnergy;
