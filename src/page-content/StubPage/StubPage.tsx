import { Box, Typography } from '@mui/material';

import { AppLogo, AppStoreIcon, GooglePlayIcon } from '@/components';
import { envUtil } from '@/utils';

import styles from './styles';

const StubPage = () => {
  const env = envUtil.getEnv();

  const links = {
    appStoreLink: env.links.appStoreLink ?? '/',
    googlePayLink: env.links.googlePLayLink ?? '/',
  };
  return (
    <Box sx={styles.root}>
      <AppLogo sx={styles.appLogo} />
      <Typography sx={styles.text}>To access Shaper GAP® please download the app</Typography>
      <Box sx={styles.marketsContainer}>
        <a href={links.appStoreLink} target="_blank" rel="noreferrer">
          <AppStoreIcon />
        </a>
        <a href={links.googlePayLink} target="_blank" rel="noreferrer">
          <GooglePlayIcon sx={styles.googlePlay} />
        </a>
      </Box>
    </Box>
  );
};

export default StubPage;
