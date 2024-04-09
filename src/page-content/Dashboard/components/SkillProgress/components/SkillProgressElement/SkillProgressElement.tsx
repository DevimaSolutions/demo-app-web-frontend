import { Box, Typography } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';
import useSkillProgressElement from './useSkillProgressElement';

import type { ISkillProgressElementProps } from './types';

const SkillProgressElement = ({ skill }: ISkillProgressElementProps) => {
  const { settings } = useSkillProgressElement({ skill });
  return (
    <Box>
      <Box sx={styles.header}>
        <Box sx={styles.nameBox}>
          <Typography sx={styles.name}>{skill.name}</Typography>
          <Box sx={styles.newProgress}>+{skill.newPoints}</Box>
        </Box>
        <Typography sx={styles.statistic}>
          {skill.currentPoints}/{skill.maxPoints}
        </Typography>
      </Box>
      <Box sx={styles.progressContainer}>
        {!!settings.outDatedProgress && (
          <Box
            sx={combineSx(
              styles.progressSegment,
              styles.oldSegment(skill.colorPalette, settings.outDatedProgress),
            )}
          />
        )}
        {!!settings.newProgress && (
          <Box
            sx={combineSx(
              styles.progressSegment,
              styles.newSegment(skill.colorPalette, settings.newProgress),
            )}
          />
        )}
        {!!settings.unusedSegment && (
          <Box
            sx={combineSx(styles.progressSegment, styles.unusedSegment(settings.unusedSegment))}
          />
        )}
      </Box>
    </Box>
  );
};

export default SkillProgressElement;
