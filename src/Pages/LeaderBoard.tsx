import React from "react";
import { Quiz, QuizPlayed } from "../Data/quizData.types";
import { useStore, useUser } from "../Store";

export const LeaderBoard = () => {
  const { storeState } = useStore();
  const { quizzes } = storeState;

  const { userState } = useUser();
  const { totalAccuracy, totalScore, quizCompleted } = userState;

  return (
    <div className="flex flex-col min-h-screen bg-purple-800 items-center p-5">
      <div className="flex flex-col items-center w-full md:w-1/2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 rounded-b-3xl shadow-xl">
        <h1 className="text-3xl font-bold uppercase tracking-wider shadow-md">
          LeaderBoard
        </h1>
        <div className="flex flex-row justify-between items-center w-full mt-5">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">{totalScore}</h1>
            <p className="text-black text-sm">Total Score</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">{quizCompleted.length}</h1>
            <p className="text-black text-sm">Quiz Completed</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">{totalAccuracy.toFixed(0)}%</h1>
            <p className="text-black text-sm">Accuracy</p>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-4 text-white">
        Community Leaderboard
      </h2>
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-10 mt-3 w-full text-center text-sm py-3 text-md rounded md:w-1/2 md:text-xl md:my-3 md:p-3">
          <p className="col-span-4">Quiz Name</p>
          <p className="col-span-3">Highest Scorer</p>
          <p className="col-span-3">Your Score</p>
        </div>
        {quizzes.map((quiz: Quiz) => {
          const { _id, title, highScorerName, highestScore } = quiz;
          let userScore = 0;
          quizCompleted.map((item: QuizPlayed) => {
            if (item._id === _id) {
              userScore = item.score;
            }
          });
          return (
            <div
              key={_id}
              className="grid grid-cols-10 mt-3 w-full items-center text-center font-medium py-3 px-2 bg-white text-sm rounded-lg shadow-md md:w-1/2 md:text-xl md:my-3 md:p-3"
            >
              <p className="col-span-4">{title}</p>
              <p className="col-span-4">
                {highScorerName === "" ? null : highScorerName} -{" "}
                {highestScore === 0 ? null : highestScore}
              </p>
              <p>{userScore === 0 ? 0 : userScore}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
