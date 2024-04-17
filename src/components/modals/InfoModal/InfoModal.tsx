import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';

import { CrossIcon } from '@/components';
import { combineSx } from '@/utils';

import styles from './styles';

import type { IInfoModalProps } from './types';

const InfoModal = ({ title, content, onClose, sx, ...props }: IInfoModalProps) => {
  return (
    <Dialog onClose={onClose} sx={combineSx(styles.dialog, sx)} {...props}>
      <DialogContent>
        <DialogTitle>
          {title}
          <Button onClick={onClose}>
            <CrossIcon />
          </Button>
        </DialogTitle>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
