import React, { useReducer, useState } from 'react'
import QuizData from '../Data/quizData'
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

    const quiz = QuizData.quizzes[0]
    const currentQuestion = quiz.questions[storeState.questionNumber - 1]

    return (
        <div className="flex flex-col items-center relative h-screen">
            <h1 className="text-center text-purple-500 text-3xl uppercase my-10">{quiz.title}</h1>
            <div className="flex flex-row justify-between w-5/6">
                <div>
                    <h1 className="text-3xl text-white">{storeState.questionNumber} / <span>{storeState.totalQuestions}</span></h1>
                    <p className="text-purple-600">Questions</p>
                </div>
                <div>
                    <h1 className="text-3xl text-white">17</h1>
                </div>
                <div>
                    <h1 className="text-3xl text-white">{storeState.score}</h1>
                    <p className="text-purple-600">Points</p>
                </div>
            </div>
            <p className="flex flex-row items-center justify-center mt-4 px-5 py-3 text-left text-white text-xl rounded-xl md:text-3xl">{currentQuestion.question}</p>
            <div className="flex flex-col w-5/6 w-5/6 md:w-full md:items-center">
                {currentQuestion.options.map((option,idx) => {
                    return <button onClick={() => checkAnswer(currentQuestion, option)} className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-white text-md rounded-xl hover:bg-purple-600 shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3">{option.value}</button>
                })}
            </div>
            <div className="flex flex-row justify-between w-5/6 absolute bottom-16">
                <button onClick={() => storeDispatch({type: "PREVIOUS_QUESTION"})}>Previous</button>
                <button onClick={() => storeDispatch({type: "RESET"})}>Reset</button>
                <button onClick={() => storeDispatch({type: "NEXT_QUESTION"})}>Next</button>
            </div>
        </div>
    )
}