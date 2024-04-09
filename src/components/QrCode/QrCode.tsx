import { Box } from '@mui/material';
import { QRCode } from 'react-qrcode-logo';

import { theme } from '@/constants';
import { combineSx } from '@/utils';

import styles from './styles';

import type { IQrCodeProps } from './types';

const QrCode = ({ value, sx }: IQrCodeProps) => {
  return (
    <Box sx={combineSx(styles.root, sx)}>
      <QRCode
        value={value}
        size={227}
        bgColor="transparent"
        fgColor={theme.palette.common.white}
        logoImage="/QrLogo.svg"
        logoHeight={54}
        logoWidth={54}
        removeQrCodeBehindLogo
        logoPadding={11}
        ecLevel="H"
      />
    </Box>
  );
};

export default QrCode;
