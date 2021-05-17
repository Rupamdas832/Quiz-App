import React from 'react'
import { Link } from 'react-router-dom'
import { useQuiz, useUser } from '../Store'

export const Header = () => {

    const {userState, userDispatch} = useUser()
    const {totalScore, isLoggedIn} = userState

    const {quizDispatch} = useQuiz()

    const logoutUser = () => {
        localStorage.removeItem("QuizLoginUser")
        userDispatch({type: "USER_LOGOUT"})
    }

    return (
        <div className="flex flex-row justify-around h-10 items-center bg-blue-700">
            <Link to="/"><p className="text-white font-bold" onClick={() => quizDispatch({type: "RESET"})}>Quizzy</p></Link>
            {isLoggedIn && <p className="text-white text-lg font-medium">Score: {totalScore}</p>}
            {!isLoggedIn && <Link to="/login"><button className="text-white border-2 border-white px-1 rounded">Login</button></Link>}
            {isLoggedIn && <Link to="/"><button className="text-white border-2 border-white px-1 rounded" onClick={logoutUser}>Logout</button></Link>}
        </div>
    )
}