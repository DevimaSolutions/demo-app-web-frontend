import { SvgIcon } from '@mui/material';

import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const CoinIcon = ({
  viewBox = '0, 0, 20, 20',
  width = '20',
  height = '20',
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
      <g clip-path="url(#clip0_2117_14029)">
        <g opacity="0.2">
          <rect
            x="0.833496"
            y="0.833008"
            width="18.3333"
            height="18.3333"
            rx="9.16667"
            fill="#FFCA43"
          />
        </g>
        <rect x="2.5" y="2.5" width="15" height="15" rx="7.5" fill="#FFCA43" />
        <path
          d="M8.78949 6.88946C9.17844 6.10136 9.37291 5.70731 9.63693 5.58142C9.86664 5.47189 10.1335 5.47189 10.3632 5.58142C10.6273 5.70731 10.8217 6.10136 11.2107 6.88946L11.3391 7.14972C11.4541 7.38259 11.5115 7.49903 11.5955 7.5894C11.6699 7.66942 11.7591 7.73424 11.8582 7.78024C11.9701 7.83221 12.0986 7.85088 12.3556 7.88822L12.6428 7.92996C13.5125 8.05633 13.9474 8.11952 14.1487 8.33172C14.3239 8.51634 14.4063 8.77016 14.3731 9.02247C14.335 9.31247 14.0203 9.6192 13.391 10.2326L13.1832 10.4352C12.9972 10.6165 12.9042 10.7071 12.8442 10.8149C12.7911 10.9104 12.757 11.0153 12.7439 11.1237C12.7291 11.2462 12.751 11.3742 12.7949 11.6302L12.844 11.9162C12.9925 12.7824 13.0668 13.2155 12.9272 13.4726C12.8058 13.6962 12.5898 13.8531 12.3396 13.8995C12.052 13.9528 11.6631 13.7483 10.8852 13.3394L10.6283 13.2043C10.3984 13.0834 10.2835 13.023 10.1624 12.9993C10.0552 12.9783 9.94495 12.9783 9.83774 12.9993C9.71666 13.023 9.60173 13.0834 9.37187 13.2043L9.11498 13.3394C8.33708 13.7483 7.94813 13.9528 7.66054 13.8995C7.41032 13.8531 7.19441 13.6962 7.07295 13.4726C6.93335 13.2155 7.00763 12.7824 7.1562 11.9162L7.20526 11.6302C7.24916 11.3742 7.27111 11.2462 7.25627 11.1237C7.24313 11.0153 7.20906 10.9104 7.15594 10.8149C7.09595 10.7071 7.00297 10.6165 6.817 10.4352L6.60917 10.2326C5.97984 9.6192 5.66517 9.31247 5.62703 9.02247C5.59384 8.77016 5.67631 8.51634 5.85147 8.33172C6.05279 8.11952 6.48764 8.05633 7.35736 7.92996L7.64458 7.88822C7.90157 7.85088 8.03007 7.83221 8.14198 7.78024C8.24106 7.73424 8.33027 7.66942 8.40464 7.5894C8.48865 7.49903 8.54611 7.38259 8.66104 7.14972L8.78949 6.88946Z"
          fill="white"
        />
        <circle cx="10" cy="10" r="6" stroke="#EBB62F" stroke-width="1.125" />
        <circle cx="10" cy="10" r="1.875" fill="#FFCA43" />
      </g>
      <defs>
        <clipPath id="clip0_2117_14029">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default CoinIcon;
