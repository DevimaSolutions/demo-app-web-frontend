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

const layoutMap = {
  [LayoutTypes.Main]: MainLayout,
  [LayoutTypes.Auth]: AuthLayout,
  [LayoutTypes.Empty]: EmptyLayout,
  [LayoutTypes.Onboarding]: OnboardingLayout,
};

const Layout = ({ children, layoutType = LayoutTypes.Main }: ILayoutProps) => {
  const LayoutComponent = layoutMap[layoutType];
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

  if (!isDesktop) return <StubPage />;

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default Layout;
