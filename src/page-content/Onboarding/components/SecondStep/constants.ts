import { UserProfileTypeEnum } from '@/data-transfer/requests';

const socialStatusOptions = (selected?: string) => [
  {
    icon: '🧑🏻‍🎓',
    title: 'Student',
    selected: selected == UserProfileTypeEnum.Student,
    value: UserProfileTypeEnum.Student,
  },
  {
    icon: '👨🏻‍💻',
    title: 'Professional',
    selected: selected == UserProfileTypeEnum.Professional,
    value: UserProfileTypeEnum.Professional,
  },
  {
    icon: '💼',
    title: 'Career shifter',
    selected: selected == UserProfileTypeEnum.CareerShifter,
    value: UserProfileTypeEnum.CareerShifter,
  },
];
export default socialStatusOptions;
