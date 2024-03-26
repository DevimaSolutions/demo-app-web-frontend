import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const PlayIcon = ({
  viewBox = '0, 0, 32, 32',
  width = '32',
  height = '32',
  fill = 'currentColor',
  direction = 'up',
  sx,
  ...rest
}: ISvgProps) => {
  return (
    <SvgIcon
      viewBox={viewBox}
      width={width}
      height={height}
      sx={combineSx(styles.root, styles[direction], sx)}
      {...rest}
    >
      <path
        d="M25.192 17.3947L12.466 24.7787C11.386 25.4047 10 24.6467 10 23.3847V8.6167C10 7.3567 11.384 6.5967 12.466 7.2247L25.192 14.6087C25.4377 14.7489 25.6419 14.9517 25.7839 15.1963C25.926 15.441 26.0008 15.7188 26.0008 16.0017C26.0008 16.2846 25.926 16.5624 25.7839 16.8071C25.6419 17.0517 25.4377 17.2544 25.192 17.3947Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default PlayIcon;
