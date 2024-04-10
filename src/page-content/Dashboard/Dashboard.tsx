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
  const { profile } = useDashboard();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Box sx={styles.leftTable}>
          <Box>
            <Typography sx={styles.title}>
              Hello, <b>{profile.name}!</b>
            </Typography>
          </Box>
          <Box sx={styles.rowContainer}>
            <XPSection level={profile.level ?? 0} xpPoints={profile.experience ?? 0} />
            <Energy />
          </Box>
          <StreakDelights />
          <SkillProgress />
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
