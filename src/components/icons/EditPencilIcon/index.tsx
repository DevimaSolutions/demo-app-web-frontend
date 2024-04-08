import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const EditPencilIcon = ({
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
        d="M0.5 15.5V11.9583L11.5 0.979167C11.6667 0.826389 11.8508 0.708333 12.0525 0.625C12.2542 0.541667 12.4658 0.5 12.6875 0.5C12.9097 0.5 13.125 0.541667 13.3333 0.625C13.5417 0.708333 13.7222 0.833333 13.875 1L15.0208 2.16667C15.1875 2.31944 15.3092 2.5 15.3858 2.70833C15.4625 2.91667 15.5006 3.125 15.5 3.33333C15.5 3.55556 15.4619 3.7675 15.3858 3.96917C15.3097 4.17083 15.1881 4.35472 15.0208 4.52083L4.04167 15.5H0.5ZM12.6667 4.5L13.8333 3.33333L12.6667 2.16667L11.5 3.33333L12.6667 4.5Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default EditPencilIcon;