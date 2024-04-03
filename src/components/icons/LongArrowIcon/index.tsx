import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const LongArrowIcon = ({
  viewBox = '0, 0, 12, 14',
  width = '12',
  height = '14',
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
        d="M2 6L6 2M6 2L10 6M6 2V12"
        stroke="white"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};

export default LongArrowIcon;
