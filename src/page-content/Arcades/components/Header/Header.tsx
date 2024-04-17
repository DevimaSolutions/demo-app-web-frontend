import { Box, Button, Typography } from '@mui/material';

import { PersonIcon } from '@/components';

import Balance from '../Balance';
import Energy from '../Energy';

import styles from './styles';

import type { IHeaderProps } from './types';

const Header = ({ energy, diamonds, ...rest }: IHeaderProps) => {
  return (
    <Box sx={styles.header} {...rest}>
      <Box sx={styles.headerWrapper}>
        <Typography variant="h1">Arcades</Typography>
        <Box sx={styles.statsWrapper}>
          <Balance diamonds={diamonds} />
          <Energy energy={energy} />
        </Box>
      </Box>
      <Box sx={styles.buttonsWrapper}>
        <Button
          variant="containedSecondary"
          //TODO: change icon
          startIcon={<PersonIcon />}
        >
          Friends
        </Button>
        <Button
          variant="containedSecondary"
          //TODO: change icon
          startIcon={<PersonIcon />}
        >
          Leaderboard
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
