import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosListBox } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import Diamond from "../Assets/animat-diamond-color.gif";
import { GameInstructionModal } from "../Components/GameInstructionModal";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center relative h-screen bg-purple-800">
      {isModalOpen && <GameInstructionModal setIsModalOpen={setIsModalOpen} />}
      <div className="w-40 h-40">
        <img src={Diamond} className="w-full" alt="logo" />
      </div>
      <h1 className="text-3xl md:text-6xl font-bold text-white">
        📚Grad Quizzy
      </h1>
      <div className="w-full mt-10 text-center">
        <p className="text-pink-500 text-xl md:text-3xl font-medium">
          Quizzes on Game development
        </p>
        <p className="ml-20 md:text-xl">...test your core concepts</p>
      </div>
      <div className="flex flex-col justify-center px-16 py-4 rounded-xl">
        <div className="flex flex-col">
          <Link to="/categories">
            <button className="flex flex-row items-center w-full mt-5 px-5 py-2 text-left bg-gradient-to-r from-yellow-300 to-pink-500 text-2xl md:text-3xl rounded-xl hover:bg-blue-600 hover:text-white">
              <AiFillPlayCircle />
              <span className="ml-3">Categories</span>
            </button>
          </Link>
          <Link to="/leader-board">
            <button className="flex flex-row items-center w-full mt-5 px-5 py-2 text-left bg-gradient-to-r from-yellow-300 to-pink-500 text-2xl md:text-3xl rounded-xl hover:bg-blue-600 hover:text-white">
              <IoIosListBox />
              <span className="ml-3">LeaderBoard</span>
            </button>
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-row items-center w-full mt-5 px-5 py-2 text-left bg-gradient-to-r from-yellow-300 to-pink-500 text-2xl md:text-3xl rounded-xl hover:bg-blue-600 hover:text-white"
          >
            <IoSettingsSharp />
            <span className="ml-3">Instructions</span>
          </button>
        </div>
      </div>
    </div>
  );
};
