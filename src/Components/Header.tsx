import React from 'react'

type HeaderPropType = {
    username: string;
    score: number
}

export const Header = ({username, score} : HeaderPropType) => {
    return (
        <div>
            <p>Welcome! {username}...</p>
            <p>Score: {score}</p>
        </div>
    )
}