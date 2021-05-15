import React, { createContext, useContext, useReducer } from "react";
import QuizData from "../Data/quizData";
import { Quiz } from "../Data/quizData.types";
import QuizReducer from "./quizReducer";

export type IntialState = {
    score: number;
    status: string;
    quiz: Quiz | {}
}

const quiz = QuizData.quizzes[0]

export const initialState: any = {
    score: 0,
    status: "startingFROMnew",
    quiz: quiz,
    quizId: quiz.quizId,
    questionNumber: 1,
    totalQuestions: quiz.questions.length,
    correctAnswers: 0,
    accuracy: 0
}

const QuizContext = createContext(initialState);

export const useQuiz = () => useContext(QuizContext)


export const QuizProvider: React.FC = ({children}) => {
    

   const [quizState, quizDispatch] = useReducer(QuizReducer, initialState)

    return (
        <QuizContext.Provider value={{quizState, quizDispatch}}>{children}</QuizContext.Provider>
    )
}