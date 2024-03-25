import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const AvatarIcon = ({
  viewBox = '0, 0, 40, 40',
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
      <ellipse cx="19.9999" cy="12.1737" rx="11.7006" ry="12.1737" fill={fill} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.86804 23.7454C9.24924 23.1585 8.29548 23.0269 7.63459 23.566C3.34457 27.0652 0.459189 32.3436 0.00456562 38.3335C-0.0650955 39.2513 0.687789 39.9991 1.60825 39.9991H38.3912C39.3117 39.9991 40.0645 39.2513 39.9949 38.3335C39.5403 32.3435 36.6548 27.0651 32.3647 23.5659C31.7038 23.0268 30.7501 23.1584 30.1313 23.7453C27.4578 26.281 23.9023 27.8272 19.9996 27.8272C16.097 27.8272 12.5415 26.2811 9.86804 23.7454Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default AvatarIcon;
