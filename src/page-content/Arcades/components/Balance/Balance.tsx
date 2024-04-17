import { Box, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { PlusIcon, RubiesSimpleIcon } from '@/components';

import styles from './styles';

import type { IBalanceProps } from './types';

const Balance = ({ diamonds, ...rest }: IBalanceProps) => {
  const router = useRouter();

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);
  return (
    <Box sx={styles.root} {...rest}>
      <Box sx={styles.rubiesContainer}>
        <RubiesSimpleIcon />
      </Box>
      <Box sx={styles.dataContainer}>
        <Typography>{diamonds}</Typography>
        <IconButton onAbort={handleRedirect('/arcades')}>
          <PlusIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Balance;
