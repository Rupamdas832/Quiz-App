import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h1 className="text-xl font-medium text-black">📚Quizz App</h1>
            <Link to="/categories">Categories</Link>
            <Link to="/quiz">Play</Link>
        </div>
    )
}
