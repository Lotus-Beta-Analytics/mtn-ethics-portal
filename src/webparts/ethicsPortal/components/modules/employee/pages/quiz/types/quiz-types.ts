export type QuizResponseType = {
  id: string | number;
  question: string;
  answer: string;
  responseTime: string;
  isCorrect: boolean;
  point: number;
};
