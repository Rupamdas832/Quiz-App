import React, { useEffect, useState } from 'react'
import { Option, Question } from '../Data/quizOne.types'
import {FcOk, FcCancel} from "react-icons/fc"
import "./TimerCircularBar.css"
import { Link, Navigate } from 'react-router-dom'
import { useQuiz } from '../Store/quizContext'



export const QuestionCard = () => {
 
    const [isAnswered, setIsAnswered] = useState(false)
    const [timeCounter, setTimeCounter] = useState(0)

    const {quizState, quizDispatch} = useQuiz()
    const {questionNumber, totalQuestions, score, questions, title} = quizState;

   
    

    const showOption = (option: Option) => {
            if(option.isCorrect){
                return <button className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-green-500 text-white text-md rounded-xl shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3"><FcOk/><span className="ml-2">{option.value}</span></button>
            }
            else return <button className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-red-500 text-white text-md rounded-xl shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3"><FcCancel/><span className="ml-2">{option.value}</span></button>
    }

    const checkAnswer = (currentQuestion: Question, option : Option) => {
        setIsAnswered(true)
        if(option.isCorrect){
            quizDispatch({type: "CORRECT_ANSWER"})
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
    
    const quitBtn = () => {
        quizDispatch({type: "RESET"})
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
    
    const currentQuestion = questions[questionNumber - 1]

    return (
        <div className="flex flex-col items-center relative min-h-screen bg-blue-900">
            <h1 className="text-center text-purple-500 text-3xl uppercase my-3">{title}</h1>
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
                {currentQuestion.options.map((option: Option,idx: number) => {
                    return <div key={idx} className="flex flex-col w-full md:w-full md:items-center">
                        {isAnswered ? showOption(option) : <button onClick={() => checkAnswer(currentQuestion, option)} disabled={isAnswered} className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-white text-md rounded-xl hover:bg-purple-600 shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3">{option.value}</button>}
                    </div>
                })}
            </div>
            <div className="flex flex-row justify-between w-5/6 absolute bottom-16">
                <Link to="/"><button onClick={() => quitBtn()} className="bg-purple-600 px-2 py-1 rounded-md">Quit</button></Link>
                {questionNumber === totalQuestions ? <Link to="/result"><button className="bg-green-600 px-2 py-1 rounded-md">Submit</button></Link> : <button onClick={() => nextBtn()} className="bg-purple-600 px-2 py-1 rounded-md">Next</button>}
                
            </div>
        </div>
    )
}