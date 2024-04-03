import { Box, Typography } from '@mui/material';

import {
  HeroSection,
  XPSection,
  Communities,
  Energy,
  FriendsSection,
  BalanceSection,
} from './components';
import styles from './styles';

const Dashboard = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Box sx={styles.leftTable}>
          <Typography sx={styles.title}>Overview</Typography>
          <Box sx={styles.rowContainer}>
            <Energy />
            <XPSection />
          </Box>
          {/* <HeroSection /> */}
          <Communities />
        </Box>
        <Box sx={styles.rightTable}>
          <BalanceSection />
          <HeroSection />
          <FriendsSection />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
