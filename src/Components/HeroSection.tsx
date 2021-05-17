import React from 'react'
import { Route, Routes } from 'react-router'
import { Categories, Home, LeaderBoard, Login, Result, Signup } from '../Pages'
import {QuestionCard} from "../Components"
import { PrivateRoute } from './PrivateRoute'


export const HeroSection = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <PrivateRoute path="/quiz" element={<QuestionCard/>}/>
                <PrivateRoute path="/leader-board" element={<LeaderBoard/>}/>
                <PrivateRoute path="/result" element={<Result/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </div>
    )
}
