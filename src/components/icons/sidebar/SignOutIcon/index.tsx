import { SvgIcon } from '@mui/material';

import { theme } from '@/constants';
import { combineSx } from '@/utils';

import styles from '../../styles';

import type { ISvgProps } from '../../types';

const SignOutIcon = ({
  viewBox = '0, 0, 32, 32',
  width = '24',
  height = '24',
  disabled,
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
        d="M14 16H26M26 16L21 11M26 16L21 21"
        stroke={disabled ? theme.palette.grey[200] : '#886FFF'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.32698 6.63803C6 7.27976 6 8.11984 6 9.8V22.2C6 23.8802 6 24.7202 6.32698 25.362C6.6146 25.9265 7.07354 26.3854 7.63803 26.673C8.27976 27 9.11984 27 10.8 27H13.2C14.8802 27 15.7202 27 16.362 26.673C16.9265 26.3854 17.3854 25.9265 17.673 25.362C18 24.7202 18 23.8802 18 22.2V19.8C18 19.52 18 19.38 17.9455 19.273C17.8976 19.1789 17.8211 19.1024 17.727 19.0545C17.62 19 17.48 19 17.2 19H14C12.3431 19 11 17.6569 11 16C11 14.3431 12.3431 13 14 13H17.2C17.48 13 17.62 13 17.727 12.9455C17.8211 12.8976 17.8976 12.8211 17.9455 12.727C18 12.62 18 12.48 18 12.2V9.8C18 8.11984 18 7.27976 17.673 6.63803C17.3854 6.07354 16.9265 5.6146 16.362 5.32698C15.7202 5 14.8802 5 13.2 5H10.8C9.11984 5 8.27976 5 7.63803 5.32698C7.07354 5.6146 6.6146 6.07354 6.32698 6.63803Z"
        fill={disabled ? theme.palette.grey[200] : '#161419'}
      />
    </SvgIcon>
  );
};

export default SignOutIcon;
