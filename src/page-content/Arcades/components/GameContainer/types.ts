import type { BoxProps } from '@mui/material';

export enum GameState {
  Selected = 'selected',
  Locked = 'locked',
  ComingSoon = 'comingSoon',
  Default = 'default',
}
export interface IGameContainerProps extends BoxProps {
  title: string;
  subtitle: string;
  info: string;
  progress: number;
  contentImage: string;
  state?: GameState;
  infoTitle: string;
  infoContent: string;
  requiredLevel?: number;
  releaseDate?: string;
}
