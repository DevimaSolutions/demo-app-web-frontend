import { AppBar, Divider, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';

import { ArcadeIcon, DashboardIcon, NotificationIcon } from '@/components/icons';

import { AuthPopup, CategoryButton } from './components';
import styles from './styles';

const Header = () => {
  const router = useRouter();

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <AuthPopup />
        <CategoryButton
          disabled
          onClick={handleRedirect('/notifications')}
          selected={router.pathname === '/notifications'}
        >
          <NotificationIcon width={32} height={32} disabled />
        </CategoryButton>
        <Divider sx={styles.divider} />
        <CategoryButton onClick={handleRedirect('/')} selected={router.pathname === '/'}>
          <DashboardIcon width={32} height={32} />
        </CategoryButton>
        <CategoryButton
          disabled
          onClick={handleRedirect('/arcades')}
          selected={router.pathname === '/arcades'}
        >
          <ArcadeIcon width={32} height={32} disabled />
        </CategoryButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
