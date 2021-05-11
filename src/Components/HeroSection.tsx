import React from 'react'
import { Route, Routes } from 'react-router'
import { Categories, Home } from '../Pages'
import { QuestionCard } from './QuestionCard'

export const HeroSection = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/quiz" element={<QuestionCard/>}/>
            </Routes>
        </div>
    )
}
