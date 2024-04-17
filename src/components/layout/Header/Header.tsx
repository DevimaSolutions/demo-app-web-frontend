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
  const { handleRedirect, handleSignOut, checkIsSelected } = useHeader();

  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <UserAvatar />
        <CategoryButton
          disabled
          onClick={handleRedirect('/notifications')}
          selected={checkIsSelected('/notifications')}
        >
          <NotificationIcon width={32} height={32} disabled />
        </CategoryButton>
        <Divider sx={styles.divider} />
        <CategoryButton onClick={handleRedirect('/')} selected={checkIsSelected('/')}>
          <DashboardIcon width={32} height={32} disabled={!checkIsSelected('/')} />
        </CategoryButton>
        <CategoryButton onClick={handleRedirect('/arcades')} selected={checkIsSelected('/arcades')}>
          <ArcadeIcon width={32} height={32} disabled={!checkIsSelected('/arcades')} />
        </CategoryButton>
        <CategoryButton onClick={handleRedirect('/store')} selected={checkIsSelected('/store')}>
          <StoreIcon width={32} height={32} disabled={!checkIsSelected('/store')} />
        </CategoryButton>
        <CategoryButton onClick={handleSignOut} sx={styles.signOutOption}>
          <SignOutIcon width={32} height={32} disabled />
        </CategoryButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
