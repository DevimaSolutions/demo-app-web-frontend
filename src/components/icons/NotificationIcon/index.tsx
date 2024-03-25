import { SvgIcon } from '@mui/material';

import { theme } from '@/constants';
import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const NotificationIcon = ({
  viewBox = '0, 0, 32, 32',
  width = '24',
  height = '24',
  active = false,
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
        d="M20 25C20 27.2091 18.2091 29 16 29C13.7909 29 12 27.2091 12 25H20Z"
        fill={active ? '#242229' : theme.palette.grey[200]}
      />
      {active ? (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.1889 4.41425C16.3138 4.24698 16.2087 4 16 4C11.5817 4 8 7.58172 8 12V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 19.4477 6 20V22C6 22.5523 6.44772 23 7 23H8H24H25C25.5523 23 26 22.5523 26 22V20C26 19.4477 25.5523 19 25 19C24.4477 19 24 18.5523 24 18V14.931C24 14.1609 23.1444 13.6585 22.3951 13.837C21.9475 13.9436 21.4803 14 21 14C17.6863 14 15 11.3137 15 8C15 6.65567 15.4421 5.41459 16.1889 4.41425Z"
          fill="#242229"
        />
      ) : (
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 4C11.5817 4 8 7.58172 8 12V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 19.4477 6 20V22C6 22.5523 6.44772 23 7 23H8H24H25C25.5523 23 26 22.5523 26 22V20C26 19.4477 25.5523 19 25 19C24.4477 19 24 18.5523 24 18V12C24 7.58172 20.4183 4 16 4Z"
          fill={theme.palette.grey[200]}
        />
      )}
      {active ? <circle cx="21" cy="8" r="4" fill="#886FFF" /> : null}
    </SvgIcon>
  );
};

export default NotificationIcon;
