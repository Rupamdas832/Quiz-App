import { Action, QuizState } from "../Data/quizData.types";

const QuizReducer = (state: QuizState, action: Action) => {
  switch (action.type) {
    case "LOAD_QUIZ":
      return {
        ...state,
        title: action.payload.title,
        questions: action.payload.questions,
        _id: action.payload._id,
        totalQuestions: action.payload.questions.length,
        highestScore: action.payload.highestScore,
      };
    case "RESET":
      return {
        ...state,
        _id: "",
        score: 0,
        status: "starting",
        title: "",
        questions: [],
        quizNo: 0,
        questionNumber: 1,
        totalQuestions: 0,
        correctAnswers: 0,
        accuracy: 0,
      };
    case "INCREASE_SCORE":
      return { ...state, score: state.score + action.payload };
    case "DECREASE_SCORE":
      return { ...state, score: state.score - action.payload };
    case "NEXT_QUESTION":
      return {
        ...state,
        questionNumber:
          state.totalQuestions === state.questionNumber
            ? state.totalQuestions
            : state.questionNumber + 1,
      };
    case "PREVIOUS_QUESTION":
      return {
        ...state,
        questionNumber:
          state.questionNumber <= 1 ? 1 : state.questionNumber - 1,
      };
    case "CORRECT_ANSWER":
      return { ...state, correctAnswers: state.correctAnswers + 1 };
    case "QUESTION_ATTEMPT":
      return {
        ...state,
        questionsAttempted: state.questionsAttempted.concat(action.payload),
      };
    case "ACCURACY":
      return { ...state, accuracy: action.payload };
    default:
      return state;
  }
};

export default QuizReducer;
