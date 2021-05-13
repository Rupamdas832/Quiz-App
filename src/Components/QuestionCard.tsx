import React, { useEffect, useReducer, useState } from 'react'
import QuizData from '../Data/quizData'
import { Option, Question } from '../Data/quizOne.types'
import {FcOk, FcCancel} from "react-icons/fc"
import "./TimerCircularBar.css"
import { Navigate } from 'react-router-dom'
import { Result } from '../Pages'
import { useQuiz } from '../Store/quizContext'



export const QuestionCard = () => {
 
    const [isAnswered, setIsAnswered] = useState(false)
    const [timeCounter, setTimeCounter] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)

    const {quizState, quizDispatch} = useQuiz()
    const {questionNumber, totalQuestions, score} = quizState;

   
    const quiz = QuizData.quizzes[0]

    const showOption = (option: Option) => {
            if(option.isCorrect){
                return <button className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-green-500 text-white text-md rounded-xl shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3"><FcOk/><span className="ml-2">{option.value}</span></button>
            }
            else return <button className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-red-500 text-white text-md rounded-xl shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3"><FcCancel/><span className="ml-2">{option.value}</span></button>
    }

    const checkAnswer = (currentQuestion: Question, option : Option) => {
        setIsAnswered(true)
        if(option.isCorrect){
            setCorrectAnswers(correctAnswers => correctAnswers + 1)
            return quizDispatch({type: "INCREASE_SCORE", payload: currentQuestion.points})
        } else{
            return quizDispatch({type: "DECREASE_SCORE", payload: currentQuestion.negativePoints})
        } 
    }
    const nextBtn = () => {
        quizDispatch({type: "NEXT_QUESTION"})
        setIsAnswered(false)
        setTimeCounter(0)
    }
    
    const resetBtn = () => {
        quizDispatch({type: "RESET"})
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
    
    const currentQuestion = quiz.questions[questionNumber - 1]

    return (questionNumber > 5 ? (<Navigate to="/result" state={{path: "hello"}}/>) : (
        <div className="flex flex-col items-center relative h-screen">
            <h1 className="text-center text-purple-500 text-3xl uppercase my-10">{quiz.title}</h1>
            <div className="flex flex-row justify-between items-center w-5/6 -m-3">
                <div>
                    <h1 className="text-3xl text-white">{questionNumber} / <span>{totalQuestions}</span></h1>
                    <p className="text-purple-600">Questions</p>
                </div>
                <div>
                    {timeCounter <= 5 ? (
                        <div className={`progress-circle p${timeCounter*10}`}>
                        <span>{10 - timeCounter}</span>
                        <div className="left-half-clipper">
                            <div className="first50-bar"></div>
                            <div className="value-bar"></div>
                        </div>
                    </div>
                    ) : (
                    <div className={`progress-circle over50 p${timeCounter*10}`}>
                    <span>{10 -timeCounter}</span>
                    <div className="left-half-clipper">
                        <div className="first50-bar"></div>
                        <div className="value-bar"></div>
                    </div>
                </div>)
                }
                </div>
                <div>
                    <h1 className="text-3xl text-white">{score}</h1>
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
    ))
}