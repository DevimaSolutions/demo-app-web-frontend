export interface ISkillProgressElement {
  name: string;
  maxPoints: number;
  newPoints: number;
  currentPoints: number;
  colorPalette: string;
}

export interface ISkillProgressElementProps {
  skill: ISkillProgressElement;
}
