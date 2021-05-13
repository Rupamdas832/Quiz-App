import React from 'react'
import { Link } from 'react-router-dom'

type HeaderPropType = {
    username: string;
    score: number
}

export const Header = ({username, score} : HeaderPropType) => {
    return (
        <div className="flex flex-row justify-around h-10 items-center bg-purple-700">
            <Link to="/"><p className="text-white">Welcome! {username}...</p></Link>
            <p className="text-white">Score: {score}</p>
        </div>
    )
}