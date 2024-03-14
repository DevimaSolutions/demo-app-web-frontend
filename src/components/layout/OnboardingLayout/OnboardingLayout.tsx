import { PagesBackground } from '@/components';

import { OnboardingProgress } from './components';

import type { PropsWithChildren } from 'react';

const OnboardingLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <PagesBackground>
      <OnboardingProgress />
      {children}
    </PagesBackground>
  );
};

export default OnboardingLayout;
