import { useEffect, useState } from 'react';

const useTimer = (
  initialSeconds: number | null,
  action: (dependency: number) => void,
  dependency: number,
) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);

  useEffect(() => {
    let intervalId: NodeJS.Timer | null = null;

    if (secondsRemaining !== null) {
      if (secondsRemaining > 0) {
        intervalId = setInterval(() => {
          setSecondsRemaining((prevSeconds) => (prevSeconds ? Math.max(0, prevSeconds - 1) : null));
        }, 1000);
      } else {
        setSecondsRemaining(initialSeconds);
        action(dependency);
      }
    }

    return () => clearInterval(intervalId as NodeJS.Timer);
  }, [action, dependency, initialSeconds, secondsRemaining]);

  useEffect(() => {
    setSecondsRemaining(initialSeconds);
  }, [initialSeconds, dependency]);

  const minutes = secondsRemaining ? Math.floor(secondsRemaining / 60) : 0;
  const seconds = secondsRemaining ? (secondsRemaining % 60).toString().padStart(2, '0') : 0;

  return { minutes, seconds, totalSeconds: secondsRemaining };
};

export default useTimer;
