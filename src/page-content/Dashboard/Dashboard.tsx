import { Box } from '@mui/material';

import { Balance, HeroSection, XPSection, Communities, Energy, FriendsSection } from './components';
import styles from './styles';

const Dashboard = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.leftTable}>
        <HeroSection />
        <Communities />
      </Box>
      <Box sx={styles.rightTable}>
        <Balance />
        <XPSection />
        <Energy />
        <FriendsSection />
      </Box>
    </Box>
  );
};

export default Dashboard;
