import { Box } from '@mui/material';

import { LifeHeartIcon } from '@/components';
import { combineSx } from '@/utils';

import styles from './styles';

import type { ILifeSectionProps } from './types';

const LifeSection = ({ maxLife, life, sx }: ILifeSectionProps) => {
  return (
    <Box sx={combineSx(styles.container, sx)}>
      {Array.from({ length: maxLife }, (_, i) => i)
        .reverse()
        .map((i) => (
          <LifeHeartIcon key={i} disabled={!(life > i)} />
        ))}
    </Box>
  );
};

export default LifeSection;
