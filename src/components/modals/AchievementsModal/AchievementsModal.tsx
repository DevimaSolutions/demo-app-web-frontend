import { Box } from '@mui/material';

import { AchievementsItem } from '@/components';

import BaseModal from '../BaseModal';

import styles from './styles';

import type { IAchievementsModalProps } from './types';

const AchievementsModal = ({ open, onClose, achievements }: IAchievementsModalProps) => {
  return (
    <BaseModal onClose={onClose} open={open} sx={styles.root} title="Achievements">
      <Box sx={styles.achievementsContainer}>
        {achievements.map((achievement, idx) => (
          <AchievementsItem achievement={achievement} key={idx} />
        ))}
      </Box>
    </BaseModal>
  );
};

export default AchievementsModal;
