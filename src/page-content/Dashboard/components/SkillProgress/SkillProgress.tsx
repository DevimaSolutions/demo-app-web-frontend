import { Box, Typography } from '@mui/material';

import { RoundTabsGroup } from '@/components';

import { SkillProgressElement } from './components';
import { fakeSkillsData, options } from './constants';
import styles from './styles';
import useSkillProgress from './useSkillProgress';

const SkillProgress = () => {
  const { value, onChange } = useSkillProgress();
  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>Skill Progress</Typography>
        <RoundTabsGroup options={options} value={value} onChange={onChange} />
      </Box>
      <Box sx={styles.skillProgressContainer}>
        {fakeSkillsData.map((skill) => (
          <SkillProgressElement skill={skill} key={skill.name} />
        ))}
      </Box>
    </Box>
  );
};

export default SkillProgress;
