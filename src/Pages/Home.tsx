import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosListBox } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import Diamond from "../Assets/animat-diamond-color.gif";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-40 h-40">
        <img src={Diamond} className="w-full" alt="logo" />
      </div>
      <div className="flex flex-col justify-center px-16 py-4 rounded-xl">
        <h1 className="text-3xl md:text-6xl font-medium text-white">
          📚Grad Quizzy
        </h1>
        <div className="flex flex-col">
          <Link to="/categories">
            <button className="flex flex-row items-center w-full mt-5 px-5 py-2 text-left bg-gradient-to-r from-yellow-400 to-pink-500 text-2xl rounded-xl hover:bg-blue-600 hover:text-white">
              <AiFillPlayCircle />
              <span className="ml-3">Categories</span>
            </button>
          </Link>
          <Link to="/leader-board">
            <button className="flex flex-row items-center w-full mt-5 px-5 py-2 text-left bg-gradient-to-r from-yellow-400 to-pink-500 text-2xl rounded-xl hover:bg-blue-600 hover:text-white">
              <IoIosListBox />
              <span className="ml-3">LeaderBoard</span>
            </button>
          </Link>
          <Link to="/">
            <button className="flex flex-row items-center w-full mt-5 px-5 py-2 text-left bg-gradient-to-r from-yellow-400 to-pink-500 text-2xl rounded-xl hover:bg-blue-600 hover:text-white">
              <IoSettingsSharp />
              <span className="ml-3">Instructions</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
