import React, { useState } from 'react'
import { QuizInstructionModal } from '../Components'
import QuizData from "../Data/quizData"
import { useQuiz, useStore } from '../Store'

export const Categories = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false)

    const {storeState} = useStore();
    const {quizzes} = storeState

    const {quizDispatch} = useQuiz()

    const playBtn = (quizNo: number) => {
        const selectedQuiz = quizzes[quizNo - 1]
        quizDispatch({type: "LOAD_QUIZ", payload: selectedQuiz})
        return setIsModalOpen(true)
    }
    return (
        <div className="flex flex-col items-center min-h-screen bg-blue-400">
            {isModalOpen && <QuizInstructionModal setIsModalOpen={setIsModalOpen}/>}
            <h1 className="text-3xl mt-5">Categories</h1>
            <div className="flex flex-row flex-wrap justify-around w-full md:w-1/2 mt-10">
            {QuizData.quizzes.map(quiz => {
                const {quizId,img,title,quizNo} = quiz;
                return <div key={quizId} className="w-40 h-40 mt-3 md:w-80 md:h-72 border-2 rounded-lg shadow-lg">
                    <div className="w-full">
                        <img src={img} alt="category" className="rounded-t-lg"/>
                    </div>
                    <div className="p-3 w-full flex flex-row justify-between items-center text-sm md:text-2xl">
                        <p>{title}</p>
                        <button className="text-xs md:text-lg p-1 px-2 rounded bg-blue-600 text-white md:hover:text-black md:hover:shadow-lg" onClick={() => playBtn(quizNo)}>Play</button>
                    </div>
                    
                </div>
            })}
            </div>
        </div>
    )
}
