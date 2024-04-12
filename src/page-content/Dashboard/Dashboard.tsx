import { Box, Typography } from '@mui/material';

import {
  HeroSection,
  XPSection,
  Energy,
  FriendsSection,
  BalanceSection,
  StreakDelights,
  SkillProgress,
} from './components';
import styles from './styles';
import useDashboard from './useDashboard';

const Dashboard = () => {
  const { user } = useDashboard();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Box sx={styles.leftTable}>
          <Box>
            <Typography sx={styles.title}>
              Hello, <b>{user?.name}!</b>
            </Typography>
          </Box>
          <HeroSection type="grid" />
          <Box sx={styles.rowContainer}>
            <XPSection level={user?.level ?? 0} xpPoints={user?.experience ?? 0} />
            <Energy />
          </Box>
          <StreakDelights />
          <SkillProgress />
        </Box>
        <Box sx={styles.rightTable}>
          <BalanceSection />
          <FriendsSection />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
