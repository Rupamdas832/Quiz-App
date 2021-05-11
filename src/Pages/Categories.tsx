import React from 'react'
import { Link } from 'react-router-dom'
import QuizData from "../Data/quizData"

export const Categories = () => {
    return (
        <div>
            <h1>Categories</h1>
            {QuizData.quizzes.map(quiz => {
                return <Link to="/quiz" state={{data: quiz}} key={quiz.quizId}>{quiz.title}</Link>
            })}
        </div>
    )
}
