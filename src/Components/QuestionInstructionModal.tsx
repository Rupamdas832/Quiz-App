import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../Store";

export const QuestionInstructionModal = ({ setIsModalOpen }: any) => {
  const { quizState, quizDispatch } = useQuiz();
  const { totalQuestions, questions } = quizState;

  const correctPoints = questions[0].points;
  const negativePoints = questions[0].negativePoints;

  const quitBtn = () => {
    quizDispatch({ type: "RESET" });
    return setIsModalOpen(false);
  };

  return (
    <div className="absolute flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-50 z-20">
      <div className="flex flex-col px-5 py-5 bg-white rounded-xl w-5/6 md:w-1/2 md:text-xl">
        <h1 className="text-2xl font-semibold">Instructions</h1>
        <div className="mt-3 w-full border-t-2 border-pink-600">
          <div className="grid grid-cols-5 mt-5">
            <p className="col-span-4">Total number of questions: </p>
            <p className="text-right">{totalQuestions}</p>
          </div>
          <div className="grid grid-cols-5 mt-5">
            <p className="col-span-4">Correct answer: </p>
            <p className="text-right text-green-600 font-bold">
              {correctPoints}
            </p>
          </div>
          <div className="grid grid-cols-5 mt-5">
            <p className="col-span-4">Wrong answer: </p>
            <p className="text-right text-red-600 font-bold">
              -{negativePoints}
            </p>
          </div>
          <div className="grid grid-cols-5 mt-5">
            <p className="col-span-4">Each question has a timer of(sec): </p>
            <p className="text-right font-bold">20</p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mt-5 md:mt-10">
          <Link to="/categories">
            <button
              onClick={() => quitBtn()}
              className="border-2 border-pink-700 px-2 py-1 rounded-md"
            >
              Quit
            </button>
          </Link>
          <Link to="/quiz">
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-pink-600 text-white px-2 py-1 rounded-md"
            >
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
