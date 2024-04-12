import type { IFullUserResponse } from '@/data-transfer/responses';

const accountFields = (
  profile: IFullUserResponse,
  changePassword: () => void,
  changeName: () => void,
  changeUsername: () => void,
) => {
  return [
    {
      label: 'Name',
      defaultValue: profile.name,
      type: 'text',
      isEditable: true,
      onClick: changeName,
    },
    {
      label: 'Username',
      defaultValue: `@${profile.username}`,
      type: 'text',
      isEditable: true,
      onClick: changeUsername,
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
