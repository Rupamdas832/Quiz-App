import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../Store'

export const Header = () => {

    const {userState} = useUser()
    const {totalScore} = userState
    return (
        <div className="flex flex-row justify-around h-10 items-center bg-purple-700">
            <Link to="/"><p className="text-white font-bold">Quizzy</p></Link>
            <p className="text-white text-lg font-medium">Score: {totalScore}</p>
                <Link to="/login"><button className="text-white border-2 border-white px-1 rounded">Login</button></Link>
        </div>
    )
}