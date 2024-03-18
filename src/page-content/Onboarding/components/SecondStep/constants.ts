import { UserProfileTypeEnum } from '@/data-transfer/requests';

const socialStatusOptions = [
  {
    icon: '🧑🏻‍🎓',
    title: 'Student',
    selected: false,
    value: UserProfileTypeEnum.Student,
  },
  {
    icon: '👨🏻‍💻',
    title: 'Professional',
    selected: false,
    value: UserProfileTypeEnum.Professional,
  },
  {
    icon: '💼',
    title: 'Career shifter',
    selected: false,
    value: UserProfileTypeEnum.CareerShifter,
  },
];
export default socialStatusOptions;
