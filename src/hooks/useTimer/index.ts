import { useEffect, useState } from 'react';

const useTimer = (initialMinutes: number, action?: () => void, dependency?: number | string) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialMinutes * 60);

  useEffect(() => {
    let intervalId: NodeJS.Timer | null = null;

    if (secondsRemaining > 0) {
      intervalId = setInterval(() => {
        setSecondsRemaining((prevSeconds) => Math.max(0, prevSeconds - 1));
      }, 1000);
    } else if (action) {
      setSecondsRemaining(initialMinutes * 60);
      action();
    }

    return () => clearInterval(intervalId as NodeJS.Timer);
  }, [action, initialMinutes, secondsRemaining]);

  useEffect(() => {
    setSecondsRemaining(initialMinutes * 60);
  }, [initialMinutes, dependency]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = (secondsRemaining % 60).toString().padStart(2, '0');

  return { minutes, seconds, totalSeconds: secondsRemaining };
};

export default useTimer;
