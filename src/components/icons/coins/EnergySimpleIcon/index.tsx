import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../../styles';

import type { ISvgProps } from '../../types';

const EnergySimpleIcon = ({
  viewBox = '0, 0, 16, 16',
  width = '16',
  height = '16',
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
        opacity="0.3"
        d="M11.198 2.46059C8.14373 0.697231 4.22396 1.74753 2.46059 4.80177C0.697231 7.856 1.74753 11.7758 4.80177 13.5391C7.856 15.3025 11.7758 14.2522 13.5391 11.198C15.3025 8.14373 14.2522 4.22396 11.198 2.46059ZM4.77109 12.6144L6.97529 8.79662L4.79568 7.53822L11.3258 3.44143L9.12162 7.25922L11.2041 8.46152L4.77109 12.6144Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.07244 4.00037C3.28065 0.175635 8.17489 -1.13577 11.9996 1.07244C15.8244 3.28065 17.1358 8.17489 14.9276 11.9996C12.7193 15.8244 7.82511 17.1358 4.00037 14.9276C0.175635 12.7193 -1.13577 7.82511 1.07244 4.00037ZM2.46073 4.8019C0.697365 7.85613 1.74766 11.7759 4.8019 13.5393C7.85613 15.3026 11.7759 14.2523 13.5393 11.1981C15.3026 8.14386 14.2523 4.22409 11.1981 2.46073C8.14386 0.697365 4.22409 1.74766 2.46073 4.8019Z"
        fill="white"
      />
      <path
        d="M11.326 3.44156L4.79581 7.53835L6.97543 8.79675L4.77122 12.6145L11.2042 8.46165L9.12176 7.25936L11.326 3.44156Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default EnergySimpleIcon;
