import { Box } from '@mui/material';

import { PlusIcon, RubiesSimpleIcon } from '@/components';

import styles from './styles';
import useBalanceSection from './useBalanceSection';

const BalanceSection = () => {
  const { handleRedirect } = useBalanceSection();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.innerBox}>
        Diamonds
        <Box sx={styles.countContainer}>
          {/* TODO: Change to real data */}
          {Number(2145).toLocaleString()}
          <Box sx={styles.actionButton} onClick={handleRedirect('/store')}>
            <PlusIcon />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.iconContainer}>
        <RubiesSimpleIcon />
      </Box>
    </Box>
  );
};

export default BalanceSection;
