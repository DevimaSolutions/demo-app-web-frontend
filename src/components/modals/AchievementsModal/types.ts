import type { IBaseModalProps } from '../BaseModal/types';
import type { IAchievementsItem } from '@/components/AchievementsItem/types';

export interface IAchievementsModalProps extends Omit<IBaseModalProps, 'children'> {
  achievements: IAchievementsItem[];
}
