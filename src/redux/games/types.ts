export interface IGameQuestion {
  id: number;
  question: string;
  image: string;
  answers: string[];
  correctAnswer: string;
}

export default interface IGamesState {
  isLoading: boolean;
  user: {
    lifeCount: number;
    maxLife: number;
    currentQuestion: number;
  };
  game: {
    level: number;
    questions: IGameQuestion[];
  };
}
