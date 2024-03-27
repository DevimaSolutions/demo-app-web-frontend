import { Box } from '@mui/material';

import { Balance, HeroSection, XPSection, Communities, FriendsSection } from './components';
import styles from './styles';
import useDashboard from './useDashboard';

const Dashboard = () => {
  const { isFriendsLoading, friends } = useDashboard();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.leftTable}>
        <HeroSection />
        <Communities />
      </Box>
      <Box sx={styles.rightTable}>
        <Balance />
        <XPSection />
        <FriendsSection friends={friends} isLoading={isFriendsLoading} />
      </Box>
    </Box>
  );
};

export default Dashboard;
