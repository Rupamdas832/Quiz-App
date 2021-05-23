import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { FcOk, FcCancel } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Option, Question } from "../Data/quizData.types";
import { useQuiz, useStore, useUser } from "../Store";
import { QuitModal } from "./QuitModal";
import URL from "./ServerURL";
import { Toast } from "./Toast";

export const QuestionCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  type QuestionAction =
    | { type: "IS_ANSWERED"; payload: boolean }
    | { type: "RESET_TIME" }
    | { type: "IS_SKIPPED"; payload: boolean }
    | { type: "DECREASE_TIME" };

  const initialState = {
    isAnswered: false,
    timeCounter: 20,
    isSkipped: false,
  };

  const reducer = (state: typeof initialState, action: QuestionAction) => {
    switch (action.type) {
      case "IS_ANSWERED":
        return { ...state, isAnswered: action.payload };
      case "IS_SKIPPED":
        return { ...state, isSkipped: action.payload };
      case "RESET_TIME":
        return { ...state, timeCounter: 20 };
      case "DECREASE_TIME":
        return { ...state, timeCounter: state.timeCounter - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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

  const checkAnswer = (
    currentQuestion: Question,
    option: Option,
    idx: number
  ) => {
    dispatch({ type: "IS_ANSWERED", payload: true });
    const questionAttempt = {
      _id: currentQuestion._id,
      index: idx,
      isCorrect: option.isCorrect,
    };
    quizDispatch({ type: "QUESTION_ATTEMPT", payload: questionAttempt });
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
    if (state.isAnswered) {
      quizDispatch({ type: "NEXT_QUESTION" });
      dispatch({ type: "IS_ANSWERED", payload: false });
      dispatch({ type: "RESET_TIME" });
    } else {
      dispatch({ type: "IS_SKIPPED", payload: true });
      quizDispatch({ type: "NEXT_QUESTION" });
      dispatch({ type: "IS_ANSWERED", payload: false });
      dispatch({ type: "RESET_TIME" });
    }
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
      dispatch({ type: "DECREASE_TIME" });
    }, 1000);
    if (state.timeCounter < 1 || state.isAnswered) {
      clearTimeout(interval);
      dispatch({ type: "IS_ANSWERED", payload: true });
    } else if (state.isSkipped) {
      clearTimeout(interval);
      dispatch({ type: "IS_SKIPPED", payload: false });
      dispatch({ type: "RESET_TIME" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    startTimer();
  }, [state.timeCounter]);

  const currentQuestion = questions[questionNumber - 1];

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-purple-800">
      {loadingMessage === "highScore" ? (
        <Toast title="Updating High Score" />
      ) : null}
      {isModalOpen && <QuitModal setIsModalOpen={setIsModalOpen} />}
      <h1 className="text-center text-white font-semibold text-2xl uppercase my-3">
        {title}
      </h1>
      <div className="flex flex-row justify-between items-center w-5/6 my-5 md:w-1/2">
        <div>
          <h1 className="text-2xl text-center">
            {questionNumber} / <span>{totalQuestions}</span>
          </h1>
          <p className="text-pink-500">Questions</p>
        </div>
        <div>
          <h1 className="text-2xl text-center text-white">
            {state.timeCounter}
          </h1>
        </div>
        <div>
          <h1 className="text-2xl text-center">{score}</h1>
          <p className="text-pink-500">Points</p>
        </div>
      </div>

      <p className="flex flex-row items-center justify-center px-5 py-3 text-white text-left text-xl rounded-xl md:text-3xl md:w-1/2">
        {currentQuestion.question}
      </p>
      <div className="flex flex-col w-5/6 md:w-full md:items-center md:w-1/2">
        {currentQuestion.options.map((option: Option, idx: number) => {
          return (
            <div
              key={idx}
              className="flex flex-col w-full md:w-full md:items-center"
            >
              {state.isAnswered ? (
                showOption(option)
              ) : (
                <button
                  onClick={() => checkAnswer(currentQuestion, option, idx)}
                  disabled={state.isAnswered}
                  className="flex flex-row items-center mt-3 px-5 py-2 text-left bg-white text-md rounded-xl hover:text-pink-700 shadow-lg md:w-1/3 md:text-xl md:my-3 md:p-3"
                >
                  {option.value}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between w-5/6 mt-5 md:w-1/2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-pink-500 px-3 py-1 rounded-md"
        >
          Quit
        </button>
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
            className="bg-pink-500 px-2 py-1 rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
