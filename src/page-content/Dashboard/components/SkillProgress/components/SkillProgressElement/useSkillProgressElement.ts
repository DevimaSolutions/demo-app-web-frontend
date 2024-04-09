import { useMemo } from 'react';

import type { ISkillProgressElementProps } from './types';

const useSkillProgressElement = ({ skill }: ISkillProgressElementProps) => {
  const settings = useMemo(() => {
    const pointsMultiplier = 100 / skill.maxPoints;
    return {
      outDatedProgress: (skill.currentPoints - skill.newPoints) * pointsMultiplier,
      newProgress: skill.newPoints * pointsMultiplier,
      unusedSegment: (skill.maxPoints - skill.currentPoints) * pointsMultiplier,
    };
  }, [skill.currentPoints, skill.maxPoints, skill.newPoints]);

  return { settings };
};

export default useSkillProgressElement;
