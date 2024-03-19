import { UserLearningPaceEnum } from '@/data-transfer/requests';

const learningPaceOptions = (selected?: string) => [
  {
    icon: '🧘🏻',
    title: 'Relaxed',
    subtitle: '1-3 times per week',
    selected: selected == UserLearningPaceEnum.Relaxed,
    value: UserLearningPaceEnum.Relaxed,
  },
  {
    icon: '🤩',
    title: 'Ambitious',
    subtitle: '3-5 times per week',
    selected: selected == UserLearningPaceEnum.Ambitious,
    value: UserLearningPaceEnum.Ambitious,
  },
  {
    icon: '🧐',
    title: 'Focused',
    subtitle: '+5 times per week',
    selected: selected == UserLearningPaceEnum.Focused,
    value: UserLearningPaceEnum.Focused,
  },
];
export default learningPaceOptions;
