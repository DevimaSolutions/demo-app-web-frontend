import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const ArrowIcon = ({
  viewBox = '0, 0, 16, 9',
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
        d="M8 8.73438C7.69271 8.73438 7.41146 8.60938 7.15625 8.35938L1.27344 2.34375C1.17448 2.23958 1.09896 2.1276 1.04688 2.00781C1 1.88802 0.976562 1.75521 0.976562 1.60938C0.976562 1.41667 1.02344 1.23958 1.11719 1.07812C1.21094 0.916667 1.33594 0.789062 1.49219 0.695312C1.65365 0.601562 1.83073 0.554688 2.02344 0.554688C2.3151 0.554688 2.57031 0.661458 2.78906 0.875L8.35938 6.59375H7.64844L13.2031 0.875C13.4219 0.661458 13.6771 0.554688 13.9688 0.554688C14.1615 0.554688 14.3359 0.601562 14.4922 0.695312C14.6536 0.789062 14.7812 0.916667 14.875 1.07812C14.9688 1.23958 15.0156 1.41667 15.0156 1.60938C15.0156 1.89583 14.9141 2.13802 14.7109 2.33594L8.84375 8.35938C8.71875 8.48438 8.58594 8.57812 8.44531 8.64062C8.3099 8.69792 8.16146 8.72917 8 8.73438Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default ArrowIcon;
