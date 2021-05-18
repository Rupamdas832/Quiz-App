import axios from "axios";
import React, { useEffect, useState } from "react";

import { FcOk, FcCancel } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Option, Question } from "../Data/quizData.types";
import { useQuiz, useStore, useUser } from "../Store";
import URL from "./ServerURL";
import { Toast } from "./Toast";

export const QuestionCard = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeCounter, setTimeCounter] = useState(20);

  const navigate = useNavigate();

  const { quizState, quizDispatch } = useQuiz();
  const {
    questionNumber,
    totalQuestions,
    score,
    questions,
    title,
    highestScore,
  } = quizState;

  const { storeState, storeDispatch } = useStore();
  const { loadingMessage } = storeState;

  const { userState } = useUser();
  const { name, _id } = userState;

  const showOption = (option: Option) => {
    if (option.isCorrect) {
      return (
        <button className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-green-500 text-white text-md rounded-xl shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3">
          <FcOk />
          <span className="ml-2">{option.value}</span>
        </button>
      );
    } else
      return (
        <button className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-red-500 text-white text-md rounded-xl shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3">
          <FcCancel />
          <span className="ml-2">{option.value}</span>
        </button>
      );
  };

  const checkAnswer = (currentQuestion: Question, option: Option) => {
    setIsAnswered(true);
    if (option.isCorrect) {
      quizDispatch({ type: "CORRECT_ANSWER" });
      return quizDispatch({
        type: "INCREASE_SCORE",
        payload: currentQuestion.points,
      });
    } else {
      return quizDispatch({
        type: "DECREASE_SCORE",
        payload: currentQuestion.negativePoints,
      });
    }
  };
  const nextBtn = () => {
    quizDispatch({ type: "NEXT_QUESTION" });
    setIsAnswered(false);
    setTimeCounter(20);
  };

  const quitBtn = () => {
    quizDispatch({ type: "RESET" });
  };

  const submitBtn = async () => {
    if (score > highestScore) {
      const newHighestScorer = {
        _id: quizState._id,
        score: score,
        name: name,
      };
      storeDispatch({ type: "IS_LOADING", payload: "highScore" });

      try {
        const response = await axios.post(
          `${URL}/quiz/${quizState._id}/${_id}`,
          { score: score }
        );
        if (response.status === 201) {
          storeDispatch({
            type: "UPDATE_HIGH_SCORE",
            payload: newHighestScorer,
          });
          navigate("/result");
        }
      } catch (error) {
        console.log(error);
      } finally {
        storeDispatch({ type: "IS_LOADING", payload: "success" });
      }
    }
    navigate("/result");
  };

  const startTimer = () => {
    const interval = setTimeout(() => {
      setTimeCounter((timeCounter) => timeCounter - 1);
    }, 1000);
    if (timeCounter < 1 || isAnswered) {
      clearTimeout(interval);
      setIsAnswered(true);
    }
  };

  useEffect(() => {
    startTimer();
  });

  const currentQuestion = questions[questionNumber - 1];

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-blue-400">
      {loadingMessage === "highScore" ? (
        <Toast title="Updating High Score" />
      ) : null}
      <h1 className="text-center text-blue-700 text-2xl uppercase my-3">
        {title}
      </h1>
      <div className="flex flex-row justify-between items-center w-5/6 my-5 md:w-1/2">
        <div>
          <h1 className="text-3xl">
            {questionNumber} / <span>{totalQuestions}</span>
          </h1>
          <p className="text-blue-700">Questions</p>
        </div>
        <div>
          <h1 className="text-3xl text-white">{timeCounter}</h1>
        </div>
        <div>
          <h1 className="text-3xl">{score}</h1>
          <p className="text-blue-700">Points</p>
        </div>
      </div>

      <p className="flex flex-row items-center justify-center px-5 py-3 text-left text-xl rounded-xl md:text-3xl">
        {currentQuestion.question}
      </p>
      <div className="flex flex-col w-5/6 md:w-full md:items-center md:w-1/2">
        {currentQuestion.options.map((option: Option, idx: number) => {
          return (
            <div
              key={idx}
              className="flex flex-col w-full md:w-full md:items-center"
            >
              {isAnswered ? (
                showOption(option)
              ) : (
                <button
                  onClick={() => checkAnswer(currentQuestion, option)}
                  disabled={isAnswered}
                  className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-white text-md rounded-xl hover:bg-blue-700 hover:text-white shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3"
                >
                  {option.value}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between w-5/6 mt-5 md:w-1/2">
        <Link to="/">
          <button
            onClick={() => quitBtn()}
            className="bg-blue-700 text-white px-3 py-1 rounded-md"
          >
            Quit
          </button>
        </Link>
        {questionNumber === totalQuestions ? (
          <button
            onClick={() => submitBtn()}
            className="bg-green-600 px-2 py-1 rounded-md"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => nextBtn()}
            className="bg-blue-700 text-white px-2 py-1 rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
