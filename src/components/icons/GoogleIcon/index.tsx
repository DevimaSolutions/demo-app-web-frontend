import { SvgIcon } from '@mui/material';

import { theme } from '@/constants';
import { combineSx } from '@/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const GoogleIcon = ({
  viewBox = '0, 0, 24, 24',
  width = '24',
  height = '24',
  disabled = false,
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
      <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#clip0_194_14759)">
        <path
          d="M8.36104 0.789433C5.96307 1.62131 3.89506 3.20024 2.46077 5.29431C1.02649 7.38838 0.301526 9.8872 0.392371 12.4237C0.483217 14.9603 1.38508 17.4008 2.9655 19.3869C4.54591 21.373 6.72158 22.8 9.17292 23.4582C11.1603 23.971 13.2424 23.9935 15.2404 23.5238C17.0504 23.1173 18.7238 22.2476 20.0967 21.0001C21.5256 19.662 22.5627 17.9597 23.0967 16.0763C23.6768 14.0282 23.7801 11.8743 23.3985 9.78006H12.2385V14.4094H18.7017C18.5725 15.1478 18.2957 15.8525 17.8878 16.4814C17.48 17.1102 16.9494 17.6504 16.3279 18.0694C15.5388 18.5917 14.6491 18.943 13.716 19.1007C12.7803 19.2747 11.8205 19.2747 10.8848 19.1007C9.93633 18.9048 9.03912 18.5134 8.25042 17.9513C6.9832 17.0543 6.03168 15.7799 5.53167 14.3101C5.02333 12.8126 5.02333 11.1893 5.53167 9.69193C5.88759 8.64234 6.47598 7.68669 7.25292 6.89631C8.14203 5.97521 9.26766 5.3168 10.5063 4.99333C11.745 4.66985 13.0488 4.6938 14.2748 5.06256C15.2325 5.35641 16.1083 5.87008 16.8323 6.56256C17.561 5.83756 18.2885 5.11068 19.0148 4.38193C19.3898 3.99006 19.7985 3.61693 20.1679 3.21568C19.0627 2.18728 17.7654 1.387 16.3504 0.860683C13.7736 -0.0749616 10.9541 -0.100106 8.36104 0.789433Z"
          fill="white"
        />
        <path
          d="M8.36058 0.789367C10.9535 -0.100776 13.7729 -0.0762934 16.35 0.858742C17.7652 1.38864 19.0619 2.19277 20.1656 3.22499C19.7906 3.62624 19.395 4.00124 19.0125 4.39124C18.285 5.11749 17.5581 5.84124 16.8318 6.56249C16.1079 5.87001 15.2321 5.35635 14.2743 5.06249C13.0488 4.69244 11.745 4.66711 10.506 4.98926C9.26699 5.31141 8.14067 5.96861 7.25058 6.88874C6.47364 7.67912 5.88525 8.63477 5.52933 9.68437L1.64246 6.67499C3.03372 3.91604 5.44261 1.80566 8.36058 0.789367Z"
          fill={disabled ? theme.palette.action.disabled : '#E33629'}
        />
        <path
          d="M0.611401 9.65605C0.820163 8.62063 1.16701 7.61792 1.64265 6.6748L5.52953 9.69168C5.02119 11.1891 5.02119 12.8124 5.52953 14.3098C4.23453 15.3098 2.9389 16.3148 1.64265 17.3248C0.452308 14.9554 0.0892746 12.2557 0.611401 9.65605Z"
          fill={disabled ? theme.palette.action.disabled : '#F8BD00'}
        />
        <path
          d="M12.2372 9.77832H23.3972C23.7787 11.8726 23.6754 14.0264 23.0953 16.0746C22.5614 17.958 21.5242 19.6602 20.0953 20.9983C18.8409 20.0196 17.5809 19.0483 16.3265 18.0696C16.9484 17.6501 17.4792 17.1094 17.8871 16.4798C18.295 15.8503 18.5716 15.1448 18.7003 14.4058H12.2372C12.2353 12.8646 12.2372 11.3214 12.2372 9.77832Z"
          fill={disabled ? theme.palette.action.disabled : '#587DBD'}
        />
        <path
          d="M1.64062 17.3249C2.93687 16.3249 4.2325 15.3199 5.5275 14.3099C6.02851 15.7803 6.98138 17.0547 8.25 17.9512C9.04116 18.5106 9.9403 18.8989 10.89 19.0912C11.8257 19.2652 12.7855 19.2652 13.7213 19.0912C14.6543 18.9335 15.544 18.5822 16.3331 18.0599C17.5875 19.0387 18.8475 20.0099 20.1019 20.9887C18.7292 22.2369 17.0558 23.1072 15.2456 23.5143C13.2476 23.984 11.1655 23.9615 9.17813 23.4487C7.60632 23.029 6.13814 22.2892 4.86563 21.2756C3.51886 20.2061 2.41882 18.8585 1.64062 17.3249Z"
          fill={disabled ? theme.palette.action.disabled : '#319F43'}
        />
      </g>
      <defs xmlns="http://www.w3.org/2000/svg">
        <clipPath id="clip0_194_14759">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default GoogleIcon;