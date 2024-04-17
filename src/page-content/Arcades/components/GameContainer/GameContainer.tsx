import { Box, LinearProgress, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

import { EyeIcon, InfoModal } from '@/components';

import styles from './styles';
import { GameState, type IGameContainerProps } from './types';
const GameContainer = ({
  title,
  subtitle,
  info,
  progress,
  contentImage,
  state = GameState.Default,
  infoTitle,
  infoContent,
  ...rest
}: IGameContainerProps) => {
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  return (
    <>
      <Box sx={styles.root(state)} {...rest}>
        <Box sx={styles.content(state)}>
          <Box sx={styles.contentText}>
            <Box sx={styles.title}>
              <Typography variant="h1">{title}</Typography>
              <EyeIcon sx={styles.infoIcon(state)} onClick={() => setInfoModalOpen(true)} />
              {/*TODO: add <InfoIcon sx={styles.infoIcon} /> */}
            </Box>
            <Typography>{subtitle}</Typography>
          </Box>
          <Box sx={styles.progressContainer}>
            <Box sx={styles.progressInfo}>
              <Typography>Progress</Typography>
              <Typography>{progress}/25</Typography>
            </Box>
            <Box sx={styles.progress(state)}>
              <LinearProgress variant="determinate" value={progress * 4} />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.imageWrapper(contentImage, state)}>
          <Image src={contentImage} style={styles.image} alt={title} fill />
          {(state === GameState.Locked || state === GameState.ComingSoon) && (
            <Box sx={styles.overlay}></Box>
          )}
        </Box>
      </Box>
      <InfoModal
        open={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
        title={infoTitle}
        content={infoContent}
      />
    </>
  );
};

export default GameContainer;
