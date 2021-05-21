import React from "react";
import { Link } from "react-router-dom";
import { useQuiz, useUser } from "../Store";

export const Header = () => {
  const { userState, userDispatch } = useUser();
  const { totalScore, isLoggedIn, name } = userState;

  const { quizDispatch } = useQuiz();

  const logoutUser = () => {
    localStorage.removeItem("QuizLoginUser");
    userDispatch({ type: "USER_LOGOUT" });
  };

  return (
    <div className="flex flex-col items-center h-10 bg-pink-500 md:h-12">
      <div className="flex flex-row justify-around w-full md:w-1/2 items-center h-full md:text-2xl">
        <Link to="/">
          <p
            className="text-white font-bold"
            onClick={() => quizDispatch({ type: "RESET" })}
          >
            Quizzy
          </p>
        </Link>
        {isLoggedIn && (
          <p className="text-white text-sm md:text-lg font-medium">
            {name}
            <span className="text-gray-700 text-xs md:text-sm">
              {" "}
              (TotalScore)
            </span>
            <span className="text-lg">: {totalScore}</span>
          </p>
        )}
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-white border-2 border-white px-1 rounded">
              Login
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="text-white border border-white px-1 rounded"
              onClick={logoutUser}
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
