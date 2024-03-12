import { PagesBackground } from '@/components';

import type { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren<{}>) => {
  return <PagesBackground>{children}</PagesBackground>;
};

export default AuthLayout;
