import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';

import { ArrowLineIcon } from '@/components';
import { combineSx } from '@/utils';

import styles from './styles';

import type { IBaseModalProps } from './types';

const BaseModal = ({ title, children, onClose, sx, ...props }: IBaseModalProps) => {
  return (
    <Dialog onClose={onClose} sx={combineSx(styles.dialog, sx)} {...props}>
      <DialogContent>
        {title && (
          <DialogTitle>
            <Button onClick={onClose}>
              <ArrowLineIcon direction="down" />
            </Button>
            {title}
          </DialogTitle>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
