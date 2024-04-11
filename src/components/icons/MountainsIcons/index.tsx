import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const MountainsIcons = ({
  viewBox = '0, 0, 18, 12',
  width = '18',
  height = '12',
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
      <path d="M5.78585 0.287109L0.428711 11.7157H11.143L5.78585 0.287109Z" fill="#BDAFFF" />
      <path d="M14.3573 4.85854L11.143 11.7157H17.5716L14.3573 4.85854Z" fill="#BDAFFF" />
    </SvgIcon>
  );
};

export default MountainsIcons;
