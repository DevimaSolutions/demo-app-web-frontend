import type { IProfileStateDto } from '@/redux/profile/types';

const accountFields = (profile: IProfileStateDto) => {
  return [
    {
      label: 'Name',
      defaultValue: profile.name.full,
      type: 'text',
      isEditable: true,
    },
    {
      label: 'Username',
      defaultValue: `@${profile.nickname}`,
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
    },
  ];
};

export default accountFields;
