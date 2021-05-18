export type QuizGame = {
  quizzes: Quiz[];
};

export type Quiz = {
  _id: string;
  quizNo: number;
  title: string;
  img: string;
  highestScore: number;
  highScorerName: string;
  questions: Question[];
};
export type Question = {
  _id: string;
  question: string;
  points: number;
  negativePoints: number;
  options: Option[];
};
export type Option = {
  _id: string;
  value: string;
  isCorrect: boolean;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  totalScore: number;
  totalAccuracy: number;
  quizCompleted: QuizPlayed[];
  isLoggedIn: boolean;
};

export type QuizState = {
  score: number;
  status: string;
  title: string;
  questions: Question[];
  _id: string;
  quizNo: number;
  questionNumber: number;
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
  highestScore: number;
};
export type StoreState = {
  quizzes: Quiz[];
  loadingMessage: string;
};

export type QuizPlayed = {
  _id: string;
  score: number;
};

export type Action =
  | { type: "LOAD_QUIZ"; payload: Quiz }
  | { type: "INCREASE_SCORE"; payload: number }
  | { type: "DECREASE_SCORE"; payload: number }
  | { type: "RESET" }
  | { type: "NEXT_QUESTION" }
  | { type: "PREVIOUS_QUESTION" }
  | { type: "CORRECT_ANSWER" }
  | { type: "ACCURACY"; payload: number };

export type StoreAction =
  | {
      type: "UPDATE_HIGH_SCORE";
      payload: { _id: string; score: number; name: string };
    }
  | { type: "IS_LOADING"; payload: string }
  | { type: "LOAD_QUIZZES"; payload: Quiz[] };

export type UserAction =
  | {
      type: "QUIZ_COMPLETE";
      payload: { _id: string; score: number; accuracy: number };
    }
  | { type: "USER_LOGOUT" }
  | { type: "USER_LOAD"; payload: User };
