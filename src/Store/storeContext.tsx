import React, { createContext, useContext, useReducer } from "react";
import QuizData from "../Data/quizData";
import StoreReducer from "./storeReducer";



export const initialState: any = {
    quizData: QuizData,
    quizzes: QuizData.quizzes,
    loadingMessage: null
}

const StoreContext = createContext(initialState);

export const useStore = () => useContext(StoreContext)


export const StoreProvider: React.FC = ({children}) => {
    

   const [storeState, storeDispatch] = useReducer(StoreReducer, initialState)

    return (
        <StoreContext.Provider value={{storeState, storeDispatch}}>{children}</StoreContext.Provider>
    )
}