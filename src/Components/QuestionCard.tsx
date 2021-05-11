import React, { useEffect, useReducer, useState } from 'react'
import QuizData from '../Data/quizData'
import { Option, Question } from '../Data/quizOne.types'
import {FcOk, FcCancel} from "react-icons/fc"
import "./TimerCircularBar.css"


export const QuestionCard = () => {
 
    const [isAnswered, setIsAnswered] = useState(false)
    const [timeCounter, setTimeCounter] = useState(0)

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
    const quiz = QuizData.quizzes[0]

    const initialState: InitialState = {
        score: 0,
        status: "starting",
        questionNumber: 1,
        totalQuestions: quiz.questions.length
    }

    const [storeState, storeDispatch] = useReducer(StoreReducer,initialState)

    const showOption = (option: Option) => {
            if(option.isCorrect){
                return <button className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-green-500 text-md rounded-xl shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3"><FcOk/><span className="ml-2">{option.value}</span></button>
            }
            else return <button className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-red-500 text-md rounded-xl shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3"><FcCancel/><span className="ml-2">{option.value}</span></button>
    }

    const checkAnswer = (currentQuestion: Question, option : Option) => {
        setIsAnswered(true)
        return option.isCorrect ? storeDispatch({type: "INCREASE_SCORE", payload: currentQuestion.points}) : storeDispatch({type: "DECREASE_SCORE", payload: currentQuestion.negativePoints})
    }
    const nextBtn = () => {
        storeDispatch({type: "NEXT_QUESTION"})
        setIsAnswered(false)
        setTimeCounter(0)
    }
    
    const resetBtn = () => {
        storeDispatch({type: "RESET"})
        setIsAnswered(false)
        setTimeCounter(0)
    }

    const startTimer = () => {
        const interval = setTimeout(() => {
            setTimeCounter(timeCounter => timeCounter + 1)
        },1000);
        if(timeCounter>=10 || isAnswered){
            clearTimeout(interval)
            setIsAnswered(true)
        }
    }

    useEffect(() => {
        startTimer()
    },)
    
    const currentQuestion = quiz.questions[storeState.questionNumber - 1]

    return (
        <div className="flex flex-col items-center relative h-screen">
            <h1 className="text-center text-purple-500 text-3xl uppercase my-10">{quiz.title}</h1>
            <div className="flex flex-row justify-between items-center w-5/6 -m-3">
                <div>
                    <h1 className="text-3xl text-white">{storeState.questionNumber} / <span>{storeState.totalQuestions}</span></h1>
                    <p className="text-purple-600">Questions</p>
                </div>
                <div>
                    {timeCounter <= 5 ? (
                        <div className={`progress-circle p${timeCounter*10}`}>
                        <span>{timeCounter}</span>
                        <div className="left-half-clipper">
                            <div className="first50-bar"></div>
                            <div className="value-bar"></div>
                        </div>
                    </div>
                    ) : (
                    <div className={`progress-circle over50 p${timeCounter*10}`}>
                    <span>{timeCounter}</span>
                    <div className="left-half-clipper">
                        <div className="first50-bar"></div>
                        <div className="value-bar"></div>
                    </div>
                </div>)
                }
                </div>
                <div>
                    <h1 className="text-3xl text-white">{storeState.score}</h1>
                    <p className="text-purple-600">Points</p>
                </div>
            </div>

            
            <p className="flex flex-row items-center justify-center mt-4 px-5 py-3 text-left text-white text-xl rounded-xl md:text-3xl">{currentQuestion.question}</p>
            <div className="flex flex-col w-5/6 md:w-full md:items-center">
                {currentQuestion.options.map((option,idx) => {
                    return <div key={idx} className="flex flex-col w-full md:w-full md:items-center">
                        {isAnswered ? showOption(option) : <button onClick={() => checkAnswer(currentQuestion, option)} disabled={isAnswered} className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-white text-md rounded-xl hover:bg-purple-600 shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3">{option.value}</button>}
                    </div>
                })}
            </div>
            <div className="flex flex-row justify-between w-5/6 absolute bottom-16">
                
                <button onClick={() => resetBtn()} className="bg-purple-600 px-2 py-1 rounded-md">Reset</button>
                <button onClick={() => nextBtn()} className="bg-purple-600 px-2 py-1 rounded-md">Next</button>
            </div>
        </div>
    )
}