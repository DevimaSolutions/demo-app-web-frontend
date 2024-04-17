import { Box, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { EnergyIcon, LongArrowIcon } from '@/components';

import styles from './styles';

import type { IEnergyProps } from './types';

const Energy = ({ energy, ...rest }: IEnergyProps) => {
  const router = useRouter();

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);
  return (
    <Box sx={styles.root} {...rest}>
      <Box sx={styles.energyContainer}>
        <EnergyIcon />
      </Box>
      <Box sx={styles.dataContainer}>
        <Typography>{energy}</Typography>
        <IconButton onClick={handleRedirect('/store')}>
          <LongArrowIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Energy;
