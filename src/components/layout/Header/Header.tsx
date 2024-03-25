import { AppBar, Divider, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { ArcadeIcon, DashboardIcon, NotificationIcon } from '@/components/icons';

import { AuthPopup, CategoryButton } from './components';
import styles from './styles';

const Header = () => {
  const router = useRouter();

  const handleClick = (redirectUrl: string) => () => router.push(redirectUrl);
  const headerTabs = useMemo(
    () => [
      {
        children: <NotificationIcon width={32} height={32} disabled />,
        disabled: true,
        redirectUrl: '/notification',
        isCurrentPath: router.pathname === '/notification',
      },
      {
        children: <DashboardIcon width={32} height={32} />,
        disabled: false,
        redirectUrl: '/',
        isCurrentPath: router.pathname === '/',
      },
      {
        children: <ArcadeIcon width={32} height={32} disabled />,
        disabled: true,
        redirectUrl: '/arcade',
        isCurrentPath: router.pathname === '/arcade',
      },
    ],
    [router.pathname],
  );
  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <AuthPopup />
        {headerTabs.map((tab, index) => (
          <CategoryButton
            key={index}
            disabled={tab.disabled}
            onClick={handleClick(tab.redirectUrl)}
            selected={tab.isCurrentPath}
          >
            {tab.children}
          </CategoryButton>
        ))}
        <Divider sx={styles.divider} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
