import type { StreakStatus } from './enums';
import type { StaticImageData } from 'next/image';

export interface IStreakElement {
  dayNumber: number;
  title: string;
  status: StreakStatus;
}

export interface IStreakElementProps {
  streak: IStreakElement;
}

export interface IStreakElementSettings {
  mainColor: string;
  mainTextColor: string;
  imageBackgroundColor: string;
  dayContainerColor: string;
  dayContainerTextColor: string;
  isDisabled: boolean;
  image: StaticImageData;
}
