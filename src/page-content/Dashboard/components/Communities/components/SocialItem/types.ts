import type { ISvgProps } from '@/components/icons/types';
import type { ComponentType } from 'react';

export interface ISocialItem {
  name: string;
  link: string;
  icon: ComponentType<ISvgProps>;
}

export interface ISocialItemProps {
  social: ISocialItem;
}
