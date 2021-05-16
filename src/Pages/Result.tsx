import axios from 'axios'
import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import URL from '../Components/ServerURL'
import { useQuiz, useStore, useUser } from '../Store'

export const Result = () =>{

    const {quizState, quizDispatch} = useQuiz()
    const {totalQuestions, score, correctAnswers, quizId} = quizState;

    const {userState,userDispatch} = useUser()
    const {userId} = userState;

    const {storeDispatch} = useStore()

    const calAccuracyPercentage = () => {
        const accuracy = (correctAnswers/totalQuestions)*100
        return accuracy
    }

    const resetBtn = async () => {
        const quizDone = {
            quizId: quizId,
            score: score,
            accuracy: calAccuracyPercentage()
        }
        storeDispatch({type: "IS_LOADING", payload: "adding"})
        try {
            const response = await axios.post(`${URL}/user/${userId}`, {
                "score": score,
                "accuracy": calAccuracyPercentage(),
                "quizId": quizId
            })
            if(response.status === 201){
                userDispatch({type: "QUIZ_COMPLETE", payload: quizDone})
                quizDispatch({type: "RESET"})
            }
        } catch (error) {
            console.log(error)
        }
        finally{
            storeDispatch({type: "IS_LOADING", payload: "success"})
        }
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center p-5">
            <div className="flex flex-col bg-white p-5 text-center items-center rounded-xl">
                <div className="h-40 w-40">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcUZ8w5kl0XDGZ4ItBmXTWBPRX_JAb-HPeg&usqp=CAU" alt="trophy" className="w-full"/>
                </div>
                <h2>Congrats!</h2>
                <h1 className="text-green-700 text-3xl font-bold my-3">{calAccuracyPercentage().toFixed(0)}% Score</h1>
                <p className="font-bold">Quiz completed successfully.</p>
                <p className="font-medium">You attempted <span className="text-purple-700">{totalQuestions}</span> questions and from that <span className="text-green-700">{correctAnswers}</span> is correct</p>
                <div className="flex flex-row justify-evenly w-full my-5">
                    <Link to="/"><button className="border-2 border-purple-700 px-2 py-1 rounded-md" onClick={resetBtn}>Main Menu</button></Link>
                    <Link to="/categories"><button className="border-2 border-purple-600 px-2 py-1 rounded-md" onClick={resetBtn}>Play More</button></Link>
                </div>
            </div>
        </div>
    )
}
