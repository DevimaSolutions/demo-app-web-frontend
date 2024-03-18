import { PagesBackground } from '@/components';

import { OnboardingProgress } from './components';
import useOnboardingLayout from './useOnboardingLayout';

import type { PropsWithChildren } from 'react';

const OnboardingLayout = ({ children }: PropsWithChildren<{}>) => {
  const { isLoading } = useOnboardingLayout();
  return (
    <PagesBackground>
      {!isLoading && <OnboardingProgress />}
      {children}
    </PagesBackground>
  );
};

export default OnboardingLayout;
