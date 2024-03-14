import { Box } from '@mui/material';

import { segmentProgressStyles } from './constants';
import styles from './styles';

import type { IProgressSegmentProps } from './types';

const ProgressSegment = ({ status }: IProgressSegmentProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.innerProgress(segmentProgressStyles[status])} />
    </Box>
  );
};

export default ProgressSegment;
