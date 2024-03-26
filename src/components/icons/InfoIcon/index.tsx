import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const InfoIcon = ({
  viewBox = '0, 0, 16, 16',
  width = '24',
  height = '24',
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
        xmlns="http://www.w3.org/2000/svg"
        d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 11.75C7.5875 11.75 7.25 11.4125 7.25 11V8C7.25 7.5875 7.5875 7.25 8 7.25C8.4125 7.25 8.75 7.5875 8.75 8V11C8.75 11.4125 8.4125 11.75 8 11.75ZM8.75 5.75H7.25V4.25H8.75V5.75Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default InfoIcon;
