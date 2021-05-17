import React, { createContext, useContext, useReducer } from "react";
import { Quiz } from "../Data/quizData.types";
import QuizReducer from "./quizReducer";

export type IntialState = {
    score: number;
    status: string;
    quiz: Quiz | {}
}

export const initialState: any = {
    score: 0,
    status: "starting",
    title: "",
    questions: [],
    quizId: 0,
    questionNumber: 1,
    totalQuestions: 0,
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