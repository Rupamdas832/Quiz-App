import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuizData from "../Data/quizData"
import { useQuiz, useStore } from '../Store'

export const Categories = () => {
    
    const navigate = useNavigate()

    const {storeState} = useStore();
    const {quizzes} = storeState

    const {quizDispatch} = useQuiz()

    const playBtn = (quizId: number) => {
        const selectedQuiz = quizzes[quizId - 1]
        quizDispatch({type: "LOAD_QUIZ", payload: selectedQuiz})
        return navigate("/quiz")
    }
    return (
        <div className="flex flex-col items-center min-h-screen bg-blue-900 mt-5 text-white">
            <h1 className="text-3xl">Categories</h1>
            <div className="flex flex-row flex-wrap justify-around w-full md:w-1/2 mt-10">
            {QuizData.quizzes.map(quiz => {
                return <div key={quiz.quizId} className="w-40 h-40 mt-3 md:w-80 md:h-72 border-2 border-purple-400 rounded-lg shadow-lg">
                    <div className="w-full">
                        <img src={quiz.img} alt="category" className="rounded-t-lg"/>
                    </div>
                    <div className="p-3 w-full flex flex-row justify-between items-center text-sm md:text-2xl">
                        <p>{quiz.title}</p>
                        <button className="text-xs md:text-lg p-1 px-2 rounded bg-purple-600 md:hover:text-black md:hover:shadow-lg" onClick={() => playBtn(quiz.quizId)}>Play</button>
                    </div>
                    
                </div>
            })}
            </div>
        </div>
    )
}
