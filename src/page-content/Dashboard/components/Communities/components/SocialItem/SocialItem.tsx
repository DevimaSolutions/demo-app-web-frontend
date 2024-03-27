import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import { OpenInNewTabIcon } from '@/components';

import styles from './styles';

import type { ISocialItemProps } from './types';

const SocialItem = ({ social }: ISocialItemProps) => {
  const Icon = social.icon;
  return (
    <Box sx={styles.wrapper}>
      <Link href={social.link}>
        <Box sx={styles.root}>
          <Icon />
          <Typography sx={styles.text}>{social.name}</Typography>
          <OpenInNewTabIcon sx={styles.socialLinkIcon} />
        </Box>
      </Link>
    </Box>
  );
};

export default SocialItem;
