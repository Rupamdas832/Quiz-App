import React, { createContext, useContext, useReducer } from "react";
import UserReducer from "./userReducer";

const storage = localStorage?.getItem("QuizLoginUser");

export let initialState: any = {};

if (storage !== null) {
  const userLogin = JSON.parse(storage);
  initialState = {
    _id: userLogin.userId,
    name: userLogin.userName,
    email: userLogin.userEmail,
    totalScore: userLogin.userTotalScore,
    totalAccuracy: userLogin.userTotalAccuracy,
    quizCompleted: userLogin.userQuizCompleted,
    isLoggedIn: true,
  };
} else {
  initialState = {
    _id: "",
    name: "",
    email: "",
    totalScore: 0,
    totalAccuracy: 0,
    quizCompleted: [],
    isLoggedIn: false,
  };
}

const UserContext = createContext(initialState);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [userState, userDispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};
