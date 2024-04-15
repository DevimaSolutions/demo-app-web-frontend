import { Box, Typography } from '@mui/material';

import { EliteBadgeIcon } from '@/components';

import {
  HeroSection,
  XPSection,
  Energy,
  FriendsSection,
  BalanceSection,
  SkillProgress,
  Achievements,
} from './components';
import { fakeAchievements } from './constants';
import styles from './styles';
import useDashboard from './useDashboard';

const Dashboard = () => {
  const { user, isEliteUser } = useDashboard();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Box sx={styles.leftTable}>
          <Box sx={styles.userContainer}>
            {isEliteUser && (
              <Box sx={styles.eliteBadge}>
                <EliteBadgeIcon /> Elite+
              </Box>
            )}
            <Typography sx={styles.title}>
              Hello, <b>{user?.name}!</b>
            </Typography>
          </Box>
          <HeroSection type="grid" />
          <Box sx={styles.rowContainer}>
            <XPSection level={user?.level ?? 0} xpPoints={user?.experience ?? 0} />
            <Energy />
          </Box>
          <Achievements achievements={fakeAchievements} />
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
