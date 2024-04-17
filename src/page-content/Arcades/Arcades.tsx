import { Box, Typography } from '@mui/material';

import { useAuthContext } from '@/context';

import { Balance } from './components';
import styles from './styles';

const Arcades = () => {
  const { user } = useAuthContext();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Typography variant="h1">Arcades</Typography>
        <Balance diamonds={user?.diamonds ?? 0} />
      </Box>
    </Box>
  );
};

export default Arcades;
