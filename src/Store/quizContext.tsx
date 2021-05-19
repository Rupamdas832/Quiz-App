import React, { createContext, useContext, useReducer } from "react";
import QuizReducer from "./quizReducer";

export const initialState: any = {
  _id: "",
  score: 0,
  status: "starting",
  title: "",
  questions: [],
  quizNo: 0,
  questionNumber: 1,
  totalQuestions: 0,
  correctAnswers: 0,
  accuracy: 0,
  highestScore: 0,
  questionsAttempted: [],
};

const QuizContext = createContext(initialState);

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider: React.FC = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(QuizReducer, initialState);

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
