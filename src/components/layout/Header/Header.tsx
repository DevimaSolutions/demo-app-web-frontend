import { AppBar, Divider, Toolbar } from '@mui/material';

import {
  ArcadeIcon,
  DashboardIcon,
  NotificationIcon,
  SignOutIcon,
  StoreIcon,
} from '@/components/icons';

import { UserAvatar, CategoryButton } from './components';
import styles from './styles';
import useHeader from './useHeader';

const Header = () => {
  const { router, handleRedirect, handleSignOut } = useHeader();

  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <UserAvatar />
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
          onClick={handleRedirect('/arcades')}
          selected={router.pathname === '/arcades'}
        >
          <ArcadeIcon width={32} height={32} />
        </CategoryButton>
        <CategoryButton onClick={handleRedirect('/store')} selected={router.pathname === '/store'}>
          <StoreIcon width={32} height={32} />
        </CategoryButton>
        <CategoryButton onClick={handleSignOut} sx={styles.signOutOption}>
          <SignOutIcon width={32} height={32} />
        </CategoryButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
