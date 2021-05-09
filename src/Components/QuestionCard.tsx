import React, { useReducer, useState } from 'react'
import { Option, Question } from '../Data/quizOne.types'
import quizOneData from "../Data/quizOneData"


export const QuestionCard = () => {

    type Action = 
    | {type: "INCREASE_SCORE", payload: number } 
    | {type: "DECREASE_SCORE", payload: number} 
    | {type: "RESET"}
    | {type: "NEXT_QUESTION"}
    | {type: "PREVIOUS_QUESTION"}

    type StatusState = "starting" | "progress" | "end"

    type InitialState = {
        score: number;
        status: StatusState,
        questionNumber: number,
        totalQuestions: number
    }

    const StoreReducer = (state: typeof initialState, action: Action) => {
        switch (action.type) {
            case "RESET":
                return {...state, score: 0, questionNumber: 1}
            case "INCREASE_SCORE":
                return {...state, score: state.score + action.payload}
            case "DECREASE_SCORE":
                return {...state, score: state.score - action.payload}
            case "NEXT_QUESTION":
                return {...state, questionNumber: state.totalQuestions === state.questionNumber ? (state.totalQuestions) : (state.questionNumber + 1)}
            case "PREVIOUS_QUESTION":
                return {...state, questionNumber: state.questionNumber <= 1 ? (1) : (state.questionNumber - 1)}
            default:
                return state;
        }
    }

    const initialState: InitialState = {
        score: 0,
        status: "starting",
        questionNumber: 1,
        totalQuestions: quizOneData.questions.length
    }

    const [storeState, storeDispatch] = useReducer(StoreReducer,initialState)

    const checkAnswer = (currentQuestion: Question, option : Option) => {
        return option.isCorrect ? storeDispatch({type: "INCREASE_SCORE", payload: currentQuestion.points}) : storeDispatch({type: "DECREASE_SCORE", payload: currentQuestion.negativePoints})
    }

    const currentQuestion = quizOneData.questions[storeState.questionNumber - 1]

    return (
        <div>
            <h1>Score: {storeState.score}</h1>
            <button onClick={() => storeDispatch({type: "RESET"})}>Reset</button>
            <p><span>{storeState.questionNumber} : </span> {currentQuestion.question}</p>
            {currentQuestion.options.map((option,idx) => {
                return <button onClick={() => checkAnswer(currentQuestion, option)}>{option.value}</button>
            })}
            <button onClick={() => storeDispatch({type: "PREVIOUS_QUESTION"})}>⬅️</button>
            <button onClick={() => storeDispatch({type: "NEXT_QUESTION"})}>➡️</button>
        </div>
    )
}