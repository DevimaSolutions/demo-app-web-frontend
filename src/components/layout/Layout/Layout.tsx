import { useMediaQuery } from '@mui/material';
import dynamic from 'next/dynamic';

import { theme } from '@/constants';
import { StubPage } from '@/page-content';
import { Layout as LayoutTypes } from '@/types';

import type { ILayoutProps } from './types';

const AuthLayout = dynamic(() => import('@/components/layout/AuthLayout'));
const EmptyLayout = dynamic(() => import('@/components/layout/EmptyLayout'));
const MainLayout = dynamic(() => import('@/components/layout/MainLayout'));
const OnboardingLayout = dynamic(() => import('@/components/layout/OnboardingLayout'));
const GameLayout = dynamic(() => import('@/components/layout/GameLayout'));

const layoutMap = {
  [LayoutTypes.Main]: MainLayout,
  [LayoutTypes.Auth]: AuthLayout,
  [LayoutTypes.Empty]: EmptyLayout,
  [LayoutTypes.Onboarding]: OnboardingLayout,
  [LayoutTypes.Game]: GameLayout,
};

const Layout = ({ children, layoutType = LayoutTypes.Main }: ILayoutProps) => {
  const LayoutComponent = layoutMap[layoutType];
  const isMobile = useMediaQuery(theme.breakpoints.down('xl'));

  if (isMobile) return <StubPage />;

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default Layout;
