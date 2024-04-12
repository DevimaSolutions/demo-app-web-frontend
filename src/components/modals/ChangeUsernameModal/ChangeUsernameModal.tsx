import { ChangeUsernameForm } from '@/components';

import BaseModal from '../BaseModal';

import styles from './styles';

import type { IChangeUsernameModalProps } from './types';

const ChangeUsernameModal = ({ profile, ...rest }: IChangeUsernameModalProps) => {
  return (
    <BaseModal sx={styles.root} title="Username" {...rest}>
      <ChangeUsernameForm onSubmit={rest.onClose} username={profile.username} />
    </BaseModal>
  );
};

export default ChangeUsernameModal;
