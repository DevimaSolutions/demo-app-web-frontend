import type { IProfileStateDto } from '@/redux/profile/types';

const accountFields = (profile: IProfileStateDto, changePassword: () => void) => {
  return [
    {
      label: 'Name',
      defaultValue: profile.name,
      type: 'text',
      isEditable: true,
    },
    {
      label: 'Username',
      defaultValue: `@${profile.username}`,
      type: 'text',
      isEditable: true,
    },
    {
      label: 'Email',
      defaultValue: profile.email,
      type: 'text',
      isEditable: false,
      disabled: true,
    },
    {
      label: 'Password',
      defaultValue: 'password',
      type: 'password',
      isEditable: true,
      onClick: changePassword,
    },
  ];
};

export default accountFields;
