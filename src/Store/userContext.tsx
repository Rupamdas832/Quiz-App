import React, { createContext, useContext, useReducer } from "react";
import UserData from "../Data/UserData";
import UserReducer from "./userReducer";



export const initialState: any = {
    userId: UserData._id,
   name: UserData.name,
   email: UserData.email,
   totalScore: UserData.totalScore,
   totalAccuracy: UserData.totalAccuracy,
   quizCompleted: UserData.quizCompleted,
   isLoggedIn: false
}

const UserContext = createContext(initialState);

export const useUser = () => useContext(UserContext)


export const UserProvider: React.FC = ({children}) => {
    

   const [userState, userDispatch] = useReducer(UserReducer, initialState)

    return (
        <UserContext.Provider value={{userState, userDispatch}}>{children}</UserContext.Provider>
    )
}