import React from "react";
import { Link } from "react-router-dom";
import { ReviewCard } from "../Components";
import { Question, QuestionAttempt } from "../Data/quizData.types";
import { useQuiz } from "../Store";

export const ReviewQuiz = () => {
  const { quizState, quizDispatch } = useQuiz();
  const { questionsAttempted, questions } = quizState;

  return (
    <div className="flex flex-col items-center px-2 min-h-screen bg-purple-700 pb-5">
      <h1 className="text-2xl text-white font-semibold my-5">Review</h1>
      {questions.map((question: Question) => {
        const checkAttempt = questionsAttempted.find(
          (item: QuestionAttempt) => item._id === question._id
        );
        if (checkAttempt === undefined) {
          return (
            <div
              className="bg-white w-80 md:w-1/2 md:text-lg p-3 mt-3 md:px-8 flex flex-col rounded-lg relative text-sm"
              key={question._id}
            >
              <ReviewCard question={question} />
              <p className="font-medium mt-2">Your Option: Not Attempted</p>
            </div>
          );
        } else if (checkAttempt.isCorrect === true) {
          return (
            <div
              className="bg-green-300 w-80 md:w-1/2 md:text-lg p-3 mt-3 md:px-8 flex flex-col rounded-lg relative text-sm"
              key={question._id}
            >
              <p className="absolute top-1 left-1">✔️</p>
              <ReviewCard question={question} />
              <p className="font-medium mt-2">
                Your Option: {checkAttempt.index + 1}
              </p>
            </div>
          );
        } else {
          return (
            <div
              className="bg-red-300 w-80 md:w-1/2 md:text-lg p-3 mt-3 md:px-8 flex flex-col rounded-lg relative text-sm"
              key={question._id}
            >
              <p className="absolute top-1 left-1">❌</p>
              <ReviewCard question={question} />
              <p className="font-medium mt-2">
                Your Option: {checkAttempt.index + 1}
              </p>
            </div>
          );
        }
      })}
      <div className="flex flex-row w-4/6 justify-between items-center">
        <Link to="/">
          <button
            className="border border-white text-white px-2 py-1 mt-5 rounded-md"
            onClick={() => quizDispatch({ type: "RESET" })}
          >
            Main Menu
          </button>
        </Link>
        <Link to="/categories">
          <button
            className="border bg-pink-700 text-white px-2 py-1 mt-5 rounded-md"
            onClick={() => quizDispatch({ type: "RESET" })}
          >
            Play More
          </button>
        </Link>
      </div>
    </div>
  );
};
