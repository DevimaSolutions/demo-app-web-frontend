import { Box } from '@mui/material';

import { useAuthContext } from '@/context';

import { GameContainer, Header } from './components';
import games from './constants';
import styles from './styles';

const Arcades = () => {
  const { user } = useAuthContext();

  return (
    <Box sx={styles.root}>
      <Header energy={user?.energy.energy ?? 0} diamonds={user?.diamonds ?? 0} />
      <Box sx={styles.container}>
        <Box sx={styles.leftTable}>
          {games.map((game, index) => (
            <GameContainer
              key={index}
              title={game.title}
              subtitle={game.subtitle}
              info={game.info}
              progress={game.progress}
              contentImage={game.contentImage}
              state={game.state}
              infoTitle={game.infoTitle}
              infoContent={game.infoContent}
            />
          ))}
        </Box>
        <Box sx={styles.rightTable}></Box>
      </Box>
    </Box>
  );
};

export default Arcades;
