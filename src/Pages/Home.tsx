import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillPlayCircle} from "react-icons/ai"
import {IoIosListBox} from "react-icons/io"
import {IoSettingsSharp} from "react-icons/io5"

export const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-36">
            <div className="flex flex-col justify-center px-16 py-4 rounded-xl">
                <h1 className="text-3xl md:text-6xl font-medium text-purple-500">📚Grad Quizzy</h1>
                <div className="flex flex-col">
                    <Link to="/categories"><button className="flex flex-row items-center w-full mt-5 px-5 py-2 text-left bg-white text-2xl rounded-xl hover:bg-purple-600"><AiFillPlayCircle/><span className="ml-3">Categories</span></button></Link>
                    <Link to="/leader-board"><button className="flex flex-row items-center w-full mt-5 px-5 py-2 text-left bg-white text-2xl rounded-xl hover:bg-purple-600"><IoIosListBox/><span className="ml-3">LeaderBoard</span></button></Link>
                    <Link to="/"><button className="flex flex-row items-center w-full mt-5 px-5 py-2 text-left bg-white text-2xl rounded-xl hover:bg-purple-600"><IoSettingsSharp/><span className="ml-3">Instructions</span></button></Link>
                </div>
                
            </div>
        </div>
    )
}
