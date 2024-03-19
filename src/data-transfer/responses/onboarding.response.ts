import type { OnboardingStepEnum } from '@/constants';
import type { UserLearningPaceEnum, UserProfileTypeEnum } from '@/data-transfer/requests';

export interface IFirstStep {
  name: string;
  age: number;
  gender: string;
  complete: boolean;
}

export interface ISecondStep {
  profileType: UserProfileTypeEnum;
  complete: boolean;
}

export interface IThirdStep {
  learningPace: UserLearningPaceEnum;
  complete: boolean;
}

export interface IFourthStep {
  softSkills: ISoftSkillsObject[];
  complete: boolean;
}

export interface IUpdateOnboardingResponse {
  firstStep: IFirstStep;
  secondStep: ISecondStep;
  thirdStep: IThirdStep;
  fourthStep: IFourthStep;
  complete: boolean;
  currentStep: OnboardingStepEnum;
}

export type IGetOnboardingDataResponse = IUpdateOnboardingResponse;

export interface ISoftSkillsObject {
  id: string;
  name: string;
}
