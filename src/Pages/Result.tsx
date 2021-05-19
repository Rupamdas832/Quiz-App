import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../Components";
import URL from "../Components/ServerURL";
import { useQuiz, useStore, useUser } from "../Store";

export const Result = () => {
  const { quizState } = useQuiz();
  const { totalQuestions, score, correctAnswers } = quizState;

  const navigation = useNavigate();

  const { userState, userDispatch } = useUser();
  const { _id, name, email, totalScore, totalAccuracy, quizCompleted } =
    userState;

  const { storeState, storeDispatch } = useStore();
  const { loadingMessage } = storeState;

  const calAccuracyPercentage = () => {
    const accuracy = (correctAnswers / totalQuestions) * 100;
    return accuracy;
  };

  const updateScore = async () => {
    const quizDone = {
      _id: quizState._id,
      score: score,
      accuracy: calAccuracyPercentage(),
    };
    storeDispatch({ type: "IS_LOADING", payload: "updating" });
    try {
      const response = await axios.post(`${URL}/user/${_id}`, {
        score: score,
        accuracy: calAccuracyPercentage(),
        _id: quizState._id,
      });
      if (response.status === 201) {
        localStorage.setItem(
          "QuizLoginUser",
          JSON.stringify({
            isUserLogin: true,
            userId: _id,
            userName: name,
            userEmail: email,
            userTotalScore: totalScore + score,
            userTotalAccuracy:
              totalAccuracy === 0
                ? calAccuracyPercentage()
                : (totalAccuracy + calAccuracyPercentage()) / 2,
            userQuizCompleted: quizCompleted.concat({
              _id: quizState._id,
              score: score,
            }),
          })
        );
        userDispatch({ type: "QUIZ_COMPLETE", payload: quizDone });
        navigation("/review-quiz");
      }
    } catch (error) {
      console.log(error);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-purple-800 p-5 relative">
      {loadingMessage === "updating" ? <Toast title="Updating Score" /> : null}
      <div className="flex flex-col bg-white p-5 text-center items-center rounded-xl">
        <div className="h-40 w-40">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcUZ8w5kl0XDGZ4ItBmXTWBPRX_JAb-HPeg&usqp=CAU"
            alt="trophy"
            className="w-full"
          />
        </div>
        <h2>
          Congrats!{" "}
          <span className="text-green-700 text-xl">
            {calAccuracyPercentage().toFixed(0)}
          </span>
          % Accuracy
        </h2>
        <h1 className="text-green-700 text-3xl font-bold my-3">
          {score} Score
        </h1>
        <p className="font-bold">Quiz completed successfully.</p>
        <p className="font-medium">
          You attempted{" "}
          <span className="text-purple-700">{totalQuestions}</span> questions
          and from that <span className="text-green-700">{correctAnswers}</span>{" "}
          is correct
        </p>
        <div className="flex flex-row justify-evenly w-full my-5">
          <button
            className="border-2 border-pink-700 px-2 py-1 rounded-md"
            onClick={updateScore}
          >
            Review Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
