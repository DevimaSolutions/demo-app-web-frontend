import { Box } from '@mui/material';

import { LifeSection } from '@/games/components';

import styles from './styles';
import useGameLayout from './useGameLayout';

import type { PropsWithChildren } from 'react';

const GameLayout = ({ children }: PropsWithChildren<{}>) => {
  const { userGameStats } = useGameLayout();
  return (
    <Box sx={styles.container}>
      <LifeSection
        maxLife={userGameStats.maxLife}
        life={userGameStats.lifeCount}
        sx={styles.lifeSection}
      />
      <main>{children}</main>
    </Box>
  );
};

export default GameLayout;
