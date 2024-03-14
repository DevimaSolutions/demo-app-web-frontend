import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const CheckMarkIcon = ({
  viewBox = '0, 0, 12, 12',
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
        d="M4.71289 11.084C4.34961 11.084 4.04688 10.9395 3.80469 10.6504L0.78125 6.98828C0.675781 6.86719 0.601562 6.75 0.558594 6.63672C0.515625 6.52344 0.494141 6.40625 0.494141 6.28516C0.494141 6.00781 0.585938 5.7793 0.769531 5.59961C0.957031 5.41602 1.19141 5.32422 1.47266 5.32422C1.78516 5.32422 2.04492 5.45117 2.25195 5.70508L4.68945 8.72266L9.47656 1.1582C9.59766 0.974609 9.72266 0.845703 9.85156 0.771484C9.98438 0.693359 10.1465 0.654297 10.3379 0.654297C10.6191 0.654297 10.8516 0.744141 11.0352 0.923828C11.2188 1.10352 11.3105 1.33008 11.3105 1.60352C11.3105 1.70508 11.293 1.81055 11.2578 1.91992C11.2227 2.0293 11.168 2.14258 11.0938 2.25977L5.63867 10.6094C5.42383 10.9258 5.11523 11.084 4.71289 11.084Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default CheckMarkIcon;
