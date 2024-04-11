import { ChangePasswordForm } from '@/components';

import BaseModal from '../BaseModal';

import styles from './styles';

import type { IChangePasswordModalProps } from './types';

const ChangePasswordModal = ({ profile, ...rest }: IChangePasswordModalProps) => {
  return (
    <BaseModal sx={styles.root} title="Password" {...rest}>
      <ChangePasswordForm onSubmit={rest.onClose} />
    </BaseModal>
  );
};

export default ChangePasswordModal;
