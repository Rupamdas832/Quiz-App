import React, { useState } from 'react'
import quizOneData from "../Data/quizOneData"

export const QuestionCard = () => {

    const [questionNumber, setQuestionNumber] = useState(1)

    const currentQuestion = quizOneData.questions[questionNumber - 1]

    return (
        <div>
            <button onClick={() => setQuestionNumber(questionNumber => questionNumber + 1)}>Inc</button>
            <p><span>{questionNumber} : </span> {currentQuestion.question}</p>
            {currentQuestion.options.map((option,idx) => {
                return <button>{option.value}</button>
            })}
        </div>
    )
}