import { Link } from "react-router-dom";
import { useQuiz } from "../Store";

export const QuitModal = ({ setIsModalOpen }: any) => {
  const { quizDispatch } = useQuiz();

  const quitBtn = () => {
    quizDispatch({ type: "RESET" });
  };
  return (
    <div className="absolute flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-70 z-20">
      <div className="flex flex-col px-5 py-5 bg-white rounded-xl w-5/6 md:w-1/3 md:text-xl">
        <h1 className="text-xl font-semibold">Do you really want to quit?</h1>
        <p>You will lose all the points you gained during this quiz</p>

        <div className="flex flex-row justify-between w-full mt-5 md:mt-10">
          <Link to="/">
            <button
              onClick={() => quitBtn()}
              className="border border-pink-600 px-3 py-1 rounded-md"
            >
              Quit
            </button>
          </Link>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-pink-600 text-white px-2 py-1 rounded-md"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};
