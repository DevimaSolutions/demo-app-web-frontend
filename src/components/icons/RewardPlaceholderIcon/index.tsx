import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const RewardPlaceholderIcon = ({
  viewBox = '0, 0, 20, 20',
  width = '20',
  height = '20',
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
      <rect width="20" height="20" rx="10" fill="#886FFF" fillOpacity="0.1" />
      <path d="M7.75 6L4 14H11.5L7.75 6Z" fill="#BDAFFF" />
      <path d="M13.75 9.2L11.5 14H16L13.75 9.2Z" fill="#BDAFFF" />
    </SvgIcon>
  );
};

export default RewardPlaceholderIcon;
