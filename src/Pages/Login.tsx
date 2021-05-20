import axios from "axios";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../Components";
import URL from "../Components/ServerURL";

import { useStore, useUser } from "../Store";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { userDispatch } = useUser();

  const { storeState, storeDispatch } = useStore();
  const { loadingMessage } = storeState;

  const loginWithCredentials = async () => {
    storeDispatch({ type: "IS_LOADING", payload: "loggingIn" });
    try {
      const response = await axios.post(`${URL}/login`, {
        email: email,
        password: password,
      });
      const user = response.data.user;
      if (response.status === 200) {
        userDispatch({ type: "USER_LOAD", payload: user });
        localStorage.setItem(
          "QuizLoginUser",
          JSON.stringify({
            isUserLogin: true,
            userId: user._id,
            userName: user.name,
            userEmail: user.email,
            userTotalScore: user.totalScore,
            userTotalAccuracy: user.totalAccuracy,
            userQuizCompleted: user.quizCompleted,
          })
        );
        navigate("/");
      }
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {loadingMessage === "loggingIn" ? (
        <Toast title="Checking Credentials" />
      ) : null}
      <div className="flex flex-col items-center mt-12 py-3 px-5 bg-white rounded-2xl w-5/6 md:w-1/4">
        <div className="w-40 h-40">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMD8bSef8stSgnfECEHEDplxyVngLVp_eIuQ&usqp=CAU"
            alt="login"
          />
        </div>
        <div className="w-full text-left mt-5 md:flex md:flex-col md:items-center">
          <h1 className="font-semibold text-3xl">Welcome Back</h1>
          <p className="text-sm">Please login to continue</p>
          <div className="mt-5 w-full flex flex-row items-center">
            <label>
              <MdEmail />
            </label>
            <input
              placeholder="Enter Email"
              type="email"
              className="ml-3 w-full border-b-2 border-purple-600"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3 w-full flex flex-row sitems-center">
            <label>
              <RiLockPasswordFill />
            </label>
            <input
              placeholder="Enter Password"
              type="password"
              className="ml-3 w-full border-b-2 border-purple-600"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p className="bg-red-400 p-2 my-1 text-center text-sm rounded">
              {error}
            </p>
          )}
          <button
            className="py-2 px-4 mt-5 text-white bg-pink-500 rounded-xl"
            type="submit"
            onClick={loginWithCredentials}
          >
            Login
          </button>
          <p className="my-3 text-sm">
            new to quizz... create account{" "}
            <span className="text-blue-600">
              <Link to="/signup">here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
