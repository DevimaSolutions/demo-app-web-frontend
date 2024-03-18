import { UserLearningPaceEnum } from '@/data-transfer/requests';

const learningPaceOptions = [
  {
    icon: '🧘🏻',
    title: 'Relaxed',
    subtitle: '1-3 times per week',
    selected: false,
    value: UserLearningPaceEnum.Relaxed,
  },
  {
    icon: '🤩',
    title: 'Ambitious',
    subtitle: '3-5 times per week',
    selected: false,
    value: UserLearningPaceEnum.Ambitious,
  },
  {
    icon: '🧐',
    title: 'Focused',
    subtitle: '+5 times per week',
    selected: false,
    value: UserLearningPaceEnum.Focused,
  },
];
export default learningPaceOptions;
