import { Box } from '@mui/material';

import { useAuthContext } from '@/context';

import { Header } from './components';
import styles from './styles';

const Arcades = () => {
  const { user } = useAuthContext();

  return (
    <Box sx={styles.root}>
      <Header energy={user?.energy.energy ?? 0} diamonds={user?.diamonds ?? 0} />
    </Box>
  );
};

export default Arcades;
