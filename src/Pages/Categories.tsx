import React, { useEffect, useState } from "react";
import { QuestionInstructionModal } from "../Components";
import { Quiz, QuizPlayed } from "../Data/quizData.types";
import { useQuiz, useStore, useUser } from "../Store";

export const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { storeState } = useStore();
  const { quizzes } = storeState;

  const { quizDispatch } = useQuiz();

  const { userState } = useUser();
  const { quizCompleted } = userState;

  const playBtn = (quiz: Quiz) => {
    quizDispatch({ type: "LOAD_QUIZ", payload: quiz });
    return setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (userState._id === "") {
    return (
      <div className="flex flex-col items-center min-h-screen bg-purple-800">
        {isModalOpen && (
          <QuestionInstructionModal setIsModalOpen={setIsModalOpen} />
        )}
        <h1 className="text-3xl mt-5 text-white">Categories</h1>
        <div className="flex flex-row flex-wrap justify-around w-full md:w-1/2 mt-10">
          {quizzes.map((quiz: Quiz) => {
            const { _id, img, title } = quiz;
            return (
              <div
                key={_id}
                className="w-40 h-40 mt-3 md:w-80 md:h-64 border-2 border-yellow-500 text-white rounded-lg shadow-lg"
              >
                <div className="w-full">
                  <img
                    src={img}
                    alt="category"
                    className="rounded-t-lg w-full"
                  />
                </div>
                <div className="p-3 w-full flex flex-row justify-between items-center text-sm md:text-xl">
                  <p>{title}</p>
                  <button
                    className="text-xs md:text-lg p-1 px-2 rounded bg-pink-500 md:hover:text-black md:hover:shadow-lg"
                    onClick={() => playBtn(quiz)}
                  >
                    Play
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center min-h-screen bg-purple-800">
        {isModalOpen && (
          <QuestionInstructionModal setIsModalOpen={setIsModalOpen} />
        )}
        <h1 className="text-3xl mt-5 text-white">Categories</h1>
        <div className="flex flex-row flex-wrap justify-around w-full md:w-1/2 mt-10">
          {quizzes.map((quiz: Quiz) => {
            const { _id, img, title } = quiz;

            const quizAlreadyPlayed = quizCompleted.find(
              (item: QuizPlayed) => item._id === _id
            );

            return (
              <div
                key={_id}
                className="w-40 h-40 mt-3 md:w-80 md:h-64 border-yellow-500 text-white rounded-lg shadow-lg relative"
              >
                {quizAlreadyPlayed && (
                  <div className="absolute flex flex-col text-lg md:text-3xl text-pink-700 font-bold items-center justify-center w-full h-full bg-gray-200 opacity-50 rounded-lg">
                    Already Played
                  </div>
                )}
                <div className="w-full">
                  <img
                    src={img}
                    alt="category"
                    className="rounded-t-lg w-full"
                  />
                </div>
                <div className="p-3 w-full flex flex-row justify-between items-center text-sm md:text-xl">
                  <p>{title}</p>
                  <button
                    className="text-xs md:text-lg p-1 px-2 rounded bg-pink-500 md:hover:text-black md:hover:shadow-lg"
                    onClick={() => playBtn(quiz)}
                  >
                    Play
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
