import React from 'react'

import { Route , Navigate} from "react-router-dom"
import { useUser } from '../Store'

export const PrivateRoute = ({...props}) => {

    //const loginStatus = JSON.parse(localStorage.getItem("QuizLoginUser") || " ")

    const isLoggedIn = true;
    console.log(props)
    return (isLoggedIn ? (
        <Route {...props}/>
    ) : (
        <Navigate to="/login"/>
    ))
    
}
