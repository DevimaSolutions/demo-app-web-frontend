import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../../styles';

import type { ISvgProps } from '../../types';

const RubinsSimpleIcon = ({
  viewBox = '0, 0, 14, 13',
  width = '14',
  height = '13',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12L13 4.23529H9.4H4.6H1L7 12Z"
        fill="white"
        fillOpacity="0.4"
      />
      <path
        d="M10.6 1H3.4L2.2 2.61765L1 4.23529H4.6H9.4H13L11.8 2.61765L10.6 1Z"
        fill="white"
        fillOpacity="0.4"
      />
      <path
        d="M3.4 1H10.6M3.4 1L1 4.23529M3.4 1L2.2 2.61765L1 4.23529M10.6 1L13 4.23529M10.6 1L11.8 2.61765L13 4.23529M13 4.23529L7 12M13 4.23529H1M13 4.23529H9.4M7 12L1 4.23529M7 12L4.6 4.23529M7 12L9.4 4.23529M1 4.23529H4.6M4.6 4.23529H9.4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default RubinsSimpleIcon;
