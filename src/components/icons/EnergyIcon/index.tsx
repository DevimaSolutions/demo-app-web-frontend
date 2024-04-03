import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const EnergyIcon = ({
  viewBox = '0, 0, 20, 20',
  width = '20',
  height = '20',
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
        opacity="0.3"
        d="M13.9976 3.07587C10.1798 0.871661 5.28007 2.18454 3.07587 6.00233C0.87166 9.82012 2.18454 14.7198 6.00233 16.924C9.82012 19.1283 14.7198 17.8154 16.924 13.9976C19.1283 10.1798 17.8154 5.28007 13.9976 3.07587ZM5.96398 15.7681L8.71924 10.9959L5.99472 9.42289L14.1574 4.30191L11.4021 9.07415L14.0052 10.577L5.96398 15.7681Z"
        fill="#FEC943"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.34055 5.00046C4.10081 0.219544 10.2186 -1.41972 14.9995 1.34055C19.7805 4.10081 21.4197 10.2186 18.6595 14.9995C15.8992 19.7805 9.78138 21.4197 5.00046 18.6595C0.219544 15.8992 -1.41972 9.78138 1.34055 5.00046ZM3.07591 6.00237C0.871706 9.82017 2.18458 14.7199 6.00237 16.9241C9.82017 19.1283 14.7199 17.8154 16.9241 13.9976C19.1283 10.1798 17.8154 5.28011 13.9976 3.07591C10.1798 0.871706 5.28011 2.18458 3.07591 6.00237Z"
        fill="#FEC943"
      />
      <path
        d="M14.1574 4.30195L5.99477 9.42294L8.71928 10.9959L5.96403 15.7682L14.0052 10.5771L11.4022 9.0742L14.1574 4.30195Z"
        fill="#FEC943"
      />
    </SvgIcon>
  );
};

export default EnergyIcon;
