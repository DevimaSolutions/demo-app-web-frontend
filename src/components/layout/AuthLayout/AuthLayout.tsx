import { BlurredBackground } from '@/components';

import type { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren<{}>) => {
  return <BlurredBackground>{children}</BlurredBackground>;
};

export default AuthLayout;
