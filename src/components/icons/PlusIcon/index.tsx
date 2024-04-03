import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const PlusIcon = ({
  viewBox = '0, 0, 13, 14',
  width = '13',
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
        d="M6.5 2V7M6.5 12V7M6.5 7H1.5M6.5 7H11.5"
        stroke="white"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};

export default PlusIcon;
