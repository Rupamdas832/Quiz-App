import React from 'react'
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import { Link } from 'react-router-dom'

export const Login = () =>{
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="flex flex-col items-center py-3 px-5 mt-5 bg-white rounded-2xl w-5/6 md:w-1/4">
            <div className="w-40 h-40">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMD8bSef8stSgnfECEHEDplxyVngLVp_eIuQ&usqp=CAU" alt="login"/>
            </div>
            <div className="w-full text-left mt-5 md:flex md:flex-col md:items-center">
                <h1 className="font-semibold text-3xl">Welcome Back</h1>
                <p className="text-sm">Please login to continue</p>
                <div className="mt-5 w-full flex flex-row items-center">
                    <label><MdEmail/></label>
                    <input placeholder="Enter Email" type="email" className="ml-3 w-full border-b-2 border-purple-600"/>
                </div>
                <div className="mt-3 w-full flex flex-row sitems-center">
                    <label><RiLockPasswordFill/></label>
                    <input placeholder="Enter Password" type="password" className="ml-3 w-full border-b-2 border-purple-600"/>
                </div>  
                <button className="py-2 px-4 mt-10 text-white bg-purple-600 rounded-xl">Login</button>  
                <p className="my-3 text-sm">new to quizz... create account <span className="text-purple-600"><Link to="/signup">here</Link></span></p>            
            </div>
            </div> 
        </div>
    )
}
