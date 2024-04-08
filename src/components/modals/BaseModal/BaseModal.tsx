import { Dialog, DialogContent, DialogTitle } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';

import type { IBaseModalProps } from './types';

const BaseModal = ({ title, children, onClose, sx, ...props }: IBaseModalProps) => {
  return (
    <Dialog onClose={onClose} sx={combineSx(styles.dialog, sx)} {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {/* <IconButton disableRipple disableFocusRipple onClick={onClose} sx={styles.closeIconButton}>
        < />
      </IconButton> */}
    </Dialog>
  );
};

export default BaseModal;
