import { Box, Typography } from '@mui/material';

import { SocialItem } from './components';
import { socials } from './constants';
import styles from './styles';

const Communities = () => {
  return (
    <Box>
      <Typography sx={styles.title}>Communities</Typography>
      <Box sx={styles.socialContainer}>
        {socials.map((item, idx) => (
          <SocialItem key={idx} social={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Communities;
