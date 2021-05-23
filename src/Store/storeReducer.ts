import { StoreAction, Quiz, StoreState } from "../Data/quizData.types";

const StoreReducer = (state: StoreState, action: StoreAction) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, loadingMessage: action.payload };
    case "LOAD_QUIZZES":
      return { ...state, quizzes: action.payload };
    case "UPDATE_HIGH_SCORE":
      return {
        ...state,
        quizzes: state.quizzes.map((quiz: Quiz) => {
          if (quiz._id === action.payload._id) {
            quiz.highestScore = action.payload.score;
            quiz.highScorerName = action.payload.name;
            return quiz;
          }
          return quiz;
        }),
      };
    default:
      return state;
  }
};

export default StoreReducer;
