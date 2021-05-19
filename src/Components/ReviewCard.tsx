import React from "react";
import { Option, Question } from "../Data/quizData.types";

export const ReviewCard = ({ ...props }) => {
  return (
    <div className="flex flex-col">
      <p className="font-medium my-3">{props.question.question}</p>
      <ol className="list-decimal px-3">
        {props.question.options.map((option: Option) => {
          return (
            <li key={option._id}>
              {option.isCorrect ? (
                <p className="bg-green-400 px-2 mt-1">{option.value}</p>
              ) : (
                <p className="px-2 mt-1">{option.value}</p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
