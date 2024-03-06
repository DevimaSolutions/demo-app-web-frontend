import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const PersonIcon = ({
  viewBox = '0, 0, 14, 15',
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
      sx={combineSx(styles.root, sx, styles[direction])}
      {...rest}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M1.75781 14.3828C1.34115 14.3828 1.01302 14.2891 0.773438 14.1016C0.539062 13.9193 0.421875 13.6667 0.421875 13.3438C0.421875 12.8385 0.572917 12.3099 0.875 11.7578C1.17708 11.2005 1.61458 10.6797 2.1875 10.1953C2.76042 9.70573 3.45052 9.3099 4.25781 9.00781C5.07031 8.70052 5.98177 8.54688 6.99219 8.54688C8.00781 8.54688 8.91927 8.70052 9.72656 9.00781C10.5391 9.3099 11.2292 9.70573 11.7969 10.1953C12.3698 10.6797 12.8073 11.2005 13.1094 11.7578C13.4167 12.3099 13.5703 12.8385 13.5703 13.3438C13.5703 13.6667 13.4505 13.9193 13.2109 14.1016C12.9766 14.2891 12.651 14.3828 12.2344 14.3828H1.75781ZM7 7.14844C6.44271 7.14844 5.92708 6.9974 5.45312 6.69531C4.97917 6.38802 4.59635 5.97656 4.30469 5.46094C4.01823 4.9401 3.875 4.35677 3.875 3.71094C3.875 3.07552 4.01823 2.5026 4.30469 1.99219C4.59635 1.48177 4.97917 1.07812 5.45312 0.78125C5.92708 0.484375 6.44271 0.335938 7 0.335938C7.55729 0.335938 8.07292 0.481771 8.54688 0.773438C9.02083 1.0651 9.40104 1.46615 9.6875 1.97656C9.97917 2.48177 10.125 3.05469 10.125 3.69531C10.125 4.34635 9.97917 4.93229 9.6875 5.45312C9.40104 5.97396 9.02083 6.38802 8.54688 6.69531C8.07292 6.9974 7.55729 7.14844 7 7.14844Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default PersonIcon;
