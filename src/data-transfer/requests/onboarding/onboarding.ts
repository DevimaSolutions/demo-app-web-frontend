import type { UserLearningPaceEnum, UserProfileTypeEnum } from './enums';

export interface IFirstStep {
  name: string;
  age: number;
  gender: string;
}

export interface ISecondStep {
  profileType: UserProfileTypeEnum;
}

export interface IThirdStep {
  learningPace: UserLearningPaceEnum;
}

export interface IFourthStep {
  softSkills: string[];
}

export interface IUpdateOnboardingRequest {
  firstStep?: IFirstStep;
  secondStep?: ISecondStep;
  thirdStep?: IThirdStep;
  fourthStep?: IFourthStep;
}
