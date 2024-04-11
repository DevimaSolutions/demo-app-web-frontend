import { useMemo } from 'react';

import type { IAchievementsItemProps } from './types';

const useAchievementsItem = ({ achievement }: IAchievementsItemProps) => {
  const settings = useMemo(() => {
    return {
      name: achievement.name,
      percentage: achievement.percentage,
      idlePercentage: 100 - achievement.percentage,
    };
  }, [achievement]);
  return { settings };
};

export default useAchievementsItem;
