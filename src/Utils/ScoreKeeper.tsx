import React from "react";
import { Option, Question } from "../Data/quizData.types";
import { useQuiz } from "../Store";

export const ScoreKeeper = (
  currentQuestion: Question,
  option: Option,
  idx: number
) => {
  const { quizDispatch } = useQuiz();
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
