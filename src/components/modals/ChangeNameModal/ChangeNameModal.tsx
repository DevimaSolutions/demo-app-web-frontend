import { ChangeNameForm } from '@/components';

import BaseModal from '../BaseModal';

import styles from './styles';

import type { IChangeNameModalProps } from './types';

const ChangeNameModal = ({ profile, ...rest }: IChangeNameModalProps) => {
  return (
    <BaseModal sx={styles.root} title="Name" {...rest}>
      <ChangeNameForm onSubmit={rest.onClose} name={profile.name} />
    </BaseModal>
  );
};

export default ChangeNameModal;
