export const GameInstructionModal = ({ setIsModalOpen }: any) => {
  return (
    <div className="absolute flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-50 z-20">
      <div className="flex flex-col px-5 py-5 bg-white rounded-xl w-5/6 md:w-1/3 md:text-xl">
        <h1 className="text-2xl font-semibold">Instructions</h1>
        <div className="mt-3 w-full border-t-2 border-pink-600">
          <ul className="list-disc px-3">
            <li className="mt-2">
              <p className="text-lg px-2">Only 1 attempt for each quiz</p>
            </li>
            <li className="mt-2">
              <p className="text-lg px-2">Timer for every question</p>
            </li>
            <li className="mt-2">
              <p className="text-lg px-2">
                Quiz review can be seen only once after the quiz is complete
              </p>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setIsModalOpen(false)}
          className="border-2 bg-pink-700 text-white px-2 py-1 rounded-md mt-5"
        >
          Done
        </button>
      </div>
    </div>
  );
};
