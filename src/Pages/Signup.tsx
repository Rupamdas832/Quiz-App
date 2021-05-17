import React, { useState } from 'react'
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import { Link, useNavigate } from 'react-router-dom'
import { useStore, useUser } from '../Store'
import axios from 'axios'
import URL from '../Components/ServerURL'
import { Toast } from '../Components'

export const Signup = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const {storeState,storeDispatch} = useStore();
    const {loadingMessage} = storeState

    const {userDispatch} = useUser()

    const signUpUser = async () => {
        storeDispatch({type: "IS_LOADING", payload: "signup"})
        try {
            const response = await axios.post(`${URL}/signup` ,{
                    "name": name,
                    "email": email,
                    "password": password
            })
            const user = response.data.user
            console.log(response)
            if(response.status === 201){
                userDispatch({type: "USER_LOAD", payload: user})
                localStorage.setItem("QuizLoginUser", JSON.stringify({
                    isUserLogin: true,
                    userId: user._id,
                    userName: user.name,
                    userEmail: user.email,
                    userTotalScore: user.totalScore,
                    userTotalAccuracy: user.totalAccuracy,
                    userQuizCompleted: user.quizCompleted,
                }))
                navigate("/")
            }
        } catch (error) {
            setError(error.response.data.message)
        }
        finally{
            storeDispatch({type: "IS_LOADING", payload: "success"})
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {loadingMessage === "signup" ? <Toast title="Checking Credentials"/> : null}
            <div className="flex flex-col items-center py-3 px-5 mt-12 bg-white rounded-2xl w-5/6 md:w-1/4">
            <div className="w-40 h-40">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMD8bSef8stSgnfECEHEDplxyVngLVp_eIuQ&usqp=CAU" alt="signup"/>
            </div>
            <div className="w-full text-left mt-5 md:flex md:flex-col md:items-center">
                <h1 className="font-semibold text-3xl">Create Account</h1>
                <p className="text-sm">Please fill the input below here</p>
                <div className="mt-5 w-full flex flex-row items-center">
                    <label><CgProfile/></label>
                    <input placeholder="Enter Name" type="text" className="ml-3 w-full border-b-2 border-purple-600" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="mt-5 w-full flex flex-row items-center">
                    <label><MdEmail/></label>
                    <input placeholder="Enter Email" type="email" className="ml-3 w-full border-b-2 border-purple-600" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="mt-3 w-full flex flex-row sitems-center">
                    <label><RiLockPasswordFill/></label>
                    <input placeholder="Enter Password" type="password" className="ml-3 w-full border-b-2 border-purple-600" onChange={e => setPassword(e.target.value)}/>
                </div> 
                {error && <p className="bg-red-400 p-2 my-1 text-center text-sm rounded">{error}</p>} 
                <button className="py-2 px-4 mt-10 text-white bg-purple-600 rounded-xl" type="submit" onClick={signUpUser}>Signup</button>  
                <p className="my-3 text-sm">already have account.. click <span className="text-purple-600"><Link to="/login">here</Link></span></p>            
            </div>
            </div> 
        </div>
    )
}
