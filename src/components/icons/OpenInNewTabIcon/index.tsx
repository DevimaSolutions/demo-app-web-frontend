import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const OpenInNewTabIcon = ({
  viewBox = '0, 0, 24, 24',
  width = '24',
  height = '24',
  direction = 'up',
  fill = 'currentColor',
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
        d="M15.6399 7.0249H12.0179V5.0249H19.0179V12.0249H17.0179V8.4749L12.1039 13.3889L10.6899 11.9749L15.6399 7.0249Z"
        fill={fill}
      />
      <path
        d="M10.9819 6.9751H4.98193V18.9751H16.9819V12.9751H14.9819V16.9751H6.98193V8.9751H10.9819V6.9751Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default OpenInNewTabIcon;
