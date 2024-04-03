import { keyframes } from '@emotion/react';

import { theme } from '@/constants';

export const blinking = keyframes`
50% {
  opacity: 40%;
}
`;

const styles = {
  energyElement: (isFilling: boolean, fillingPosition: number) =>
    ({
      width: '100%',
      height: 24,
      background: theme.palette.common.white,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 0.4,
      ['&:first-of-type']: {
        borderRadius: '12px 4px 4px 12px',
      },
      ['&:last-of-type']: {
        borderRadius: '4px 12px 12px 4px',
      },
      [':after']: {
        content: "''",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: `${fillingPosition}%`,
        background: '#FEC943',
        animation: isFilling && `${blinking} 1.2s infinite linear`,
      },
    } as const),
} as const;

export default styles;
