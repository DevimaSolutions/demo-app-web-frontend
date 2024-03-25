import { AppBar, Toolbar } from '@mui/material';

import { AuthPopup } from './components';
import styles from './styles';

const Header = () => {
  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <AuthPopup />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
