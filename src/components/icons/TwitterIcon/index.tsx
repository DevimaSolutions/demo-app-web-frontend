import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const TwitterIcon = ({
  viewBox = '0, 0, 32, 32',
  width = '32',
  height = '32',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.903961 3.27606C0.25 4.55953 0.25 6.23969 0.25 9.6V16.4C0.25 19.7603 0.25 21.4405 0.903961 22.7239C1.4792 23.8529 2.39708 24.7708 3.52606 25.346C4.80953 26 6.48969 26 9.85 26H16.65C20.0103 26 21.6905 26 22.9739 25.346C24.1029 24.7708 25.0208 23.8529 25.596 22.7239C26.25 21.4405 26.25 19.7603 26.25 16.4V9.6C26.25 6.23969 26.25 4.55953 25.596 3.27606C25.0208 2.14708 24.1029 1.2292 22.9739 0.653961C21.6905 0 20.0103 0 16.65 0H9.85C6.48969 0 4.80953 0 3.52606 0.653961C2.39708 1.2292 1.4792 2.14708 0.903961 3.27606ZM19.7937 6L14.5819 11.9281L20.25 20H16.0811L12.2641 14.5644L7.48515 20H6.25L11.7157 13.7836L6.25 6H10.4189L14.0333 11.1472L18.5586 6H19.7937Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default TwitterIcon;
