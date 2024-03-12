import { useMemo } from 'react';

import type { IUseFillingButtonProps } from './types';

const useFillingButton = ({ segments, progress }: IUseFillingButtonProps) => {
  const isDisabled = useMemo(() => progress < segments, [progress, segments]);

  const progressBar = useMemo(() => (100 / segments) * progress, [progress, segments]);

  return { isDisabled, progressBar };
};

export default useFillingButton;
